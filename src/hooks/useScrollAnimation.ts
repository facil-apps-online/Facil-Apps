import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() =>
    new Array(itemCount).fill(false)
  );
  const containerRef = useRef<HTMLElement>(null);

  // Marks completion (used to avoid re-running on scroll)
  const hasAnimated = useRef(false);

  // Guards against the React StrictMode mount -> cleanup -> mount cycle
  // so we don't get stuck mid-animation in dev.
  const isRevealing = useRef(false);

  useEffect(() => {
    // Keep state in sync when the list size changes (e.g., filtering)
    if (visibleItems.length !== itemCount) {
      setVisibleItems(new Array(itemCount).fill(false));
      hasAnimated.current = false;
      isRevealing.current = false;
      return;
    }

    if (hasAnimated.current || itemCount === 0) return;

    const el = containerRef.current;
    if (!el) return;

    const timeouts: Array<ReturnType<typeof setTimeout>> = [];
    let revealFallback: ReturnType<typeof setTimeout> | undefined;

    const revealAll = () => {
      setVisibleItems(new Array(itemCount).fill(true));
      hasAnimated.current = true;
      isRevealing.current = false;
    };

    const startReveal = () => {
      if (hasAnimated.current || isRevealing.current) return;
      isRevealing.current = true;

      for (let i = 0; i < itemCount; i++) {
        const t = setTimeout(() => {
          setVisibleItems((prev) => {
            if (i >= prev.length) return prev;
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });

          if (i === itemCount - 1) {
            hasAnimated.current = true;
            isRevealing.current = false;
          }
        }, i * delay);

        timeouts.push(t);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        startReveal();
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // Fallback: if the observer never fires, reveal anyway.
    revealFallback = setTimeout(() => {
      if (hasAnimated.current || isRevealing.current) return;
      observer.disconnect();
      revealAll();
    }, 600);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      if (revealFallback) clearTimeout(revealFallback);
      observer.disconnect();
      isRevealing.current = false;
    };
  }, [itemCount, delay, visibleItems.length]);

  return { containerRef, visibleItems };
};
