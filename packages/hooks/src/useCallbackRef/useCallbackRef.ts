import { MutableRefObject, useEffect, useRef } from "react";

function useCallbackRef<Callback>(
  callback: Callback
): MutableRefObject<Callback> {
  const ref = useRef<Callback>(callback);

  useEffect(() => {
    if (ref.current !== callback) {
      ref.current = callback;
    }
  }, [callback]);

  return ref;
}

export { useCallbackRef };
