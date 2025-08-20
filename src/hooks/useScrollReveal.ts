import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  stagger?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.2, delay = 0, stagger = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay + stagger);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [threshold, delay, stagger]);

  return { ref, isRevealed };
};

export const useStaggeredReveal = (items: any[], baseDelay = 0, staggerDelay = 120) => {
  return items.map((_, index) =>
    useScrollReveal({
      delay: baseDelay + index * staggerDelay,
      threshold: 0.2,
    })
  );
};