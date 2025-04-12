import { FC, useEffect, useRef, useState } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypeWriter: FC<TypeWriterProps> = ({ text, className, speed = 50, delay = 0 }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const rafRef = useRef<number | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    let startTime: number | null = null;
    let currentIndex = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Wait for delay before starting
      if (elapsed < delay * 1000) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate progress after delay
      const effectiveElapsed = elapsed - delay * 1000;
      const expectedIndex = Math.floor(effectiveElapsed / speed);
      
      if (expectedIndex > currentIndex && currentIndex < text.length) {
        currentIndex++;
        if (isMounted.current) {
          setDisplayText(text.slice(0, currentIndex));
        }
      }

      if (currentIndex < text.length) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    // Reset state for new text
    setDisplayText('');
    currentIndex = 0;
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      isMounted.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink ml-0.5">|</span>
    </span>
  );
};