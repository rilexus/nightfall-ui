import { Dispatch, MutableRefObject, useEffect, useRef, useState } from "react";

function useMouseDown<Element extends HTMLElement>(): [
  boolean,
  MutableRefObject<Element | null>,
  Dispatch<boolean>
] {
  const ref = useRef<Element | null>(null);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const mouseDown = () => setMouseDown(true);
    const mouseUp = () => setMouseDown(false);

    if (element) {
      element.addEventListener("mousedown", mouseDown);
      element.addEventListener("mouseup", mouseUp);
    }
    return () => {
      if (element) {
        element.removeEventListener("mousedown", mouseDown);
        element.removeEventListener("mouseup", mouseUp);
      }
    };
  }, [ref]);

  return [mouseDown, ref, setMouseDown];
}

export { useMouseDown };
