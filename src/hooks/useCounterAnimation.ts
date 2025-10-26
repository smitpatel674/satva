import { useState, useEffect, useRef } from 'react';

export function useCounterAnimation(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      countRef.current = 0;
      startTimeRef.current = null;
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * target);

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);

  return count;
}
