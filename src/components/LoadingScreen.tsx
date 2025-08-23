import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Delay to allow fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wider">
              AM
            </div>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wider animate-fade-in">
            AM
          </div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full animate-scale-in"></div>
        </div>
        <div className="mt-8">
          <div className="w-12 h-12 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};