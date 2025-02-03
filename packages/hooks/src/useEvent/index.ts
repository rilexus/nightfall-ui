import { RefObject, useLayoutEffect, useRef } from "react";

const useEvent = (
  ref: RefObject<HTMLElement | Window | typeof globalThis>,
  event: string,
  handler: () => void,
  capture?: boolean
) => {
  useLayoutEffect(() => {
    ref?.current?.addEventListener(event, handler, capture);
    return () => ref.current?.removeEventListener(event, handler, capture);
  }, []);
};

export { useEvent };
