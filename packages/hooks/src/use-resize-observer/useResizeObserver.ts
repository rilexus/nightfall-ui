import { useEffect, useRef } from "react";
import { useCallbackRef } from "../useCallbackRef";

const useResizeObserver = (callback: any) => {
  const callRef = useCallbackRef(callback);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    const handleResize = (entries: any) => {
      for (const container of entries) {
        const rect = container.target?.getBoundingClientRect();
        callRef.current(rect);
      }
    };
    const observer: ResizeObserver = new ResizeObserver(handleResize);
    if (element) {
      observer.observe(element);
      callRef.current(element.getBoundingClientRect());
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, callRef]);

  return ref;
};

export { useResizeObserver };
