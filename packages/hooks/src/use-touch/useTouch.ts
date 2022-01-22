import { MutableRefObject, useEffect, useRef, useState } from "react";

function useTouch<Element extends HTMLElement>(): [
  boolean,
  MutableRefObject<Element | null>
] {
  const ref = useRef<Element | null>(null);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const mouseDown = () => setDown(true);
    const mouseUp = () => setDown(false);

    if (element) {
      element.addEventListener("touchstart", mouseDown);
      element.addEventListener("touchend", mouseUp);
      element.addEventListener("touchcancel", mouseUp);
    }
    return () => {
      if (element) {
        element.removeEventListener("touchstart", mouseDown);
        element.removeEventListener("touchend", mouseUp);
        element.removeEventListener("touchcancel", mouseUp);
      }
    };
  }, [ref]);

  return [down, ref];
}

export { useTouch };
