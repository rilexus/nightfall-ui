import { useCallback, useEffect, useRef } from "react";

const useThrottle = (callback: (...args: any) => void, time: number) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const timeoutRef = useRef<any>(-1);
  const paused = useRef(false);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return useCallback(
    (...args: any) => {
      if (paused.current) return;
      paused.current = true;

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
        paused.current = false;
      }, time);
    },
    [time, callbackRef, paused]
  );
};

export default useThrottle;
