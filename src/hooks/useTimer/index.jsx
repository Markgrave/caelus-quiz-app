import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = (initialTime, onTimeout, isRunning) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const intervalRef = useRef();
  const onTimeoutRef = useRef(onTimeout);

  onTimeoutRef.current = onTimeout;

  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          onTimeoutRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return { timeLeft, resetTimer };
};
