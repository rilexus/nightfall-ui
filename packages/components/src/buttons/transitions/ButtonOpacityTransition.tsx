import React, { FunctionComponent, PropsWithChildren } from "react";
import { Ease, mergeRefs } from "react-transitions-library";
import {
  useCSSProperties,
  useMouseDown,
  useMouseOver,
} from "@nightfall-ui/hooks";

const ButtonOpacityTransition: FunctionComponent<
  PropsWithChildren<{
    timeout?: number;
    delay?: number;
    ease?: Ease;
    disabled?: boolean;
  }>
> = ({ children, timeout = 200, ease = Ease.ease, delay = 0, disabled }) => {
  const [
    mouseOver,
    // mouseOverRef
  ] = useMouseOver<HTMLDivElement>();
  const [mouseDown, mouseDownRef, setDown] = useMouseDown<HTMLDivElement>();

  const style = useCSSProperties(
    {
      userSelect: "none",
      display: "inline-block",
      ...(!disabled
        ? {
            transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
            opacity: mouseDown ? 0.6 : mouseOver ? 0.7 : 1,
          }
        : {}),
    },
    [mouseOver, mouseDown, disabled]
  );

  return (
    <div
      style={style}
      ref={mergeRefs([
        // mouseOverRef,
        mouseDownRef,
      ])}
      onTouchCancel={() => setDown(false)}
      onTouchEnd={() => setDown(false)}
    >
      {children}
    </div>
  );
};

export { ButtonOpacityTransition };
