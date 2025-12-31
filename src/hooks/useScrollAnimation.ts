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
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Initialize array with correct size
    if (visibleItems.length !== itemCount) {
      setVisibleItems(new Array(itemCount).fill(false));
      hasAnimated.current = false;
    }

    if (hasAnimated.current || itemCount === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let index = 0;
          const interval = setInterval(() => {
            if (index < itemCount) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                if (index < newState.length) {
                  newState[index] = true;
                }
                return newState;
              });
              index++;
            } else {
              clearInterval(interval);
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, delay, visibleItems.length]);

  return { containerRef, visibleItems };
};
