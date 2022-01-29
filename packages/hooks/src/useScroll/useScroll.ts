import { RefObject, useEffect, useRef } from "react";
import { useCallbackRef } from "../useCallbackRef";

function useScroll<Element extends HTMLElement>(
  callback: (e: any) => any
): RefObject<Element> {
  const ref = useRef<Element | null>(null);
  const callbackRef = useCallbackRef(callback);

  useEffect(() => {
    const elem = ref.current;
    const handle = (e: any) => callbackRef.current(e);
    elem?.addEventListener("scroll", handle);
    return () => {
      elem?.removeEventListener("scroll", handle);
    };
  }, [ref, callbackRef]);

  return ref as RefObject<Element>;
}

export { useScroll };
