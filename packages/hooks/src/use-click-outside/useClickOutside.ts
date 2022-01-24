import { MouseEventHandler, useEffect, useRef } from "react";

function useClickOutside<Element = any>(callback: MouseEventHandler<Element>) {
  const callbackRef = useRef(callback);
  const ref = useRef<Element>(null);

  useEffect(() => {
    if (callbackRef.current !== callback) {
      callbackRef.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current(event);
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callbackRef, ref]);

  return ref;
}

export { useClickOutside };
