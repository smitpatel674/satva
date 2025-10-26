import { useCounterAnimation } from '../hooks/useCounterAnimation';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  shouldStart?: boolean;
}

export default function AnimatedCounter({ 
  value, 
  suffix = '', 
  duration = 2000, 
  shouldStart = false 
}: AnimatedCounterProps) {
  const count = useCounterAnimation(value, duration, shouldStart);
  const isAnimating = shouldStart && count < value;
  
  return (
    <span className={`${isAnimating ? 'animate-counter-glow counter-highlight' : ''} transition-all duration-300`}>
      {count === 0 && !shouldStart ? '0' : count}
      {suffix}
    </span>
  );
}
