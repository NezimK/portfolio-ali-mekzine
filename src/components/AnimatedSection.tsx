import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'reveal' | 'zoom';
}

export const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0, 
  animationType = 'reveal' 
}: AnimatedSectionProps) => {
  const { ref, isRevealed } = useScrollReveal({ delay, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        animationType === 'reveal' ? 'animate-reveal' : 'animate-zoom',
        isRevealed && 'revealed',
        className
      )}
    >
      {children}
    </div>
  );
};