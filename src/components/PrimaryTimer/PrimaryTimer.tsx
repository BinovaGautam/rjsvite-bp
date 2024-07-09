import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  initialSeconds: number;
  onComplete?: () => void;
}

const PrimaryTImer: React.FC<TimerProps> = ({ initialSeconds, onComplete }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (seconds > 0) {
      timerRef.current = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0 && onComplete) {
      onComplete();
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [seconds, onComplete]);

  return (
    <div>
      <span>{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}</span>
    </div>
  );
};

export default PrimaryTImer;
