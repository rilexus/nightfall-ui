import { Dispatch, MutableRefObject, useEffect, useRef, useState } from "react";

function useMouseOver<Element extends HTMLElement>(): [
  boolean,
  MutableRefObject<Element | null>,
  Dispatch<boolean>
] {
  const ref = useRef<Element | null>(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const mouseEnter = () => setMouseOver(true);
    const mouseLeave = () => setMouseOver(false);

    if (element) {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, [ref]);

  return [mouseOver, ref, setMouseOver];
}
export { useMouseOver };
