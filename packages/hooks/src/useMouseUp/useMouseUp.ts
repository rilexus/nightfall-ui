import { RefObject, useEffect, useRef } from "react";
import { useCallbackRef } from "../useCallbackRef";

function useMouseUp<Element extends HTMLElement>(
  callback: (this: Element) => any
): RefObject<Element> {
  const ref = useRef<Element>(null);
  const callbackRef = useCallbackRef(callback);
  useEffect(() => {
    ref.current?.addEventListener("mouseup", callbackRef.current);
    return () => {
      ref.current?.removeEventListener("mouseup", callbackRef.current);
    };
  }, [ref, callbackRef]);
  return ref as RefObject<Element>;
}

export { useMouseUp };
