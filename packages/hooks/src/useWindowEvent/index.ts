import { useLayoutEffect, useRef } from "react";
import { useEvent } from "../useEvent";

const useWindowEvent = (
  event: string,
  handler: () => void,
  useCapture?: boolean
) => {
  const ref = useRef(window);
  useEvent(ref, event, handler, useCapture);
};

export { useWindowEvent };
