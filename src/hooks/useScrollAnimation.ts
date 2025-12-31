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

export const useStaggeredAnimation = (itemCount: number, delay = 100, resetKey?: string) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // Reset when itemCount or resetKey changes
  useEffect(() => {
    setVisibleItems(new Array(itemCount).fill(false));
    hasAnimated.current = false;
  }, [itemCount, resetKey]);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let index = 0;
          const interval = setInterval(() => {
            if (index < itemCount) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              index++;
            } else {
              clearInterval(interval);
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, delay, resetKey]);

  return { containerRef, visibleItems };
};
