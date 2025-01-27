import { useLayoutEffect, useRef, useState } from "react";

export function useMousePosition() {
  const [state, setState] = useState<any>({
    x: -10000,
    y: -10000,
    elementX: -10000,
    elementY: -10000,
    elementPositionX: -10000,
    elementPositionY: -10000,
  });

  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const mousemove = (event: any) => {
      requestAnimationFrame(() => {
        let newState: any = {
          x: event.pageX,
          y: event.pageY,
        };

        if (ref.current?.nodeType === Node.ELEMENT_NODE) {
          const { left, top } = ref.current.getBoundingClientRect();
          const elementPositionX = left + window.scrollX;
          const elementPositionY = top + window.scrollY;
          const elementX = event.pageX - elementPositionX;
          const elementY = event.pageY - elementPositionY;

          newState.elementX = elementX;
          newState.elementY = elementY;
          newState.elementPositionX = elementPositionX;
          newState.elementPositionY = elementPositionY;
        }

        setState((s: any) => {
          return {
            ...s,
            ...newState,
          };
        });
      });
    };

    document.addEventListener("mousemove", mousemove);
    return () => {
      document.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return [state, ref];
}

export default useMousePosition;
