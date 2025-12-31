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
  const hasAnimated = useRef(false);

  // Keep state in sync when the list size changes (e.g., filtering)
  useEffect(() => {
    setVisibleItems(new Array(itemCount).fill(false));
    hasAnimated.current = false;
  }, [itemCount]);

  useEffect(() => {
    if (hasAnimated.current || itemCount === 0) return;
    if (visibleItems.length !== itemCount) return;

    const el = containerRef.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    let revealFallback: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        let index = 0;
        interval = setInterval(() => {
          if (index < itemCount) {
            setVisibleItems((prev) => {
              if (index >= prev.length) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            index++;
          } else if (interval) {
            clearInterval(interval);
          }
        }, delay);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // Fallback: if the observer never fires (some layouts/browsers), reveal anyway.
    revealFallback = setTimeout(() => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setVisibleItems(new Array(itemCount).fill(true));
      observer.disconnect();
    }, 600);

    return () => {
      if (interval) clearInterval(interval);
      if (revealFallback) clearTimeout(revealFallback);
      observer.disconnect();
    };
  }, [itemCount, delay, visibleItems.length]);

  return { containerRef, visibleItems };
};
