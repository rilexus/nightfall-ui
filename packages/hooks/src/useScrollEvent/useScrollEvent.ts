import { MutableRefObject, useEffect, useRef } from "react";

const useScrollEvent = (
  elementRef: MutableRefObject<HTMLElement | undefined | null>,
  callback: (element: HTMLElement) => void
) => {
  const callBackRef = useRef(callback);

  callBackRef.current = callback;

  useEffect(() => {
    const element = elementRef.current;
    const handler = () => {
      callBackRef.current(elementRef.current as HTMLElement);
    };

    if (element) {
      element.addEventListener("scroll", handler);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handler);
      }
    };
  }, [elementRef, callBackRef]);
};

export default useScrollEvent;
