import React, { FC } from "react";
import { Ease, mergeRefs } from "react-transitions-library";
import {
  useCSSProperties,
  useMouseDown,
  useMouseOver,
} from "@nightfall-ui/hooks";

const ButtonOpacityTransition: FC<{
  timeout?: number;
  delay?: number;
  ease?: Ease;
}> = ({ children, timeout = 400, ease = Ease.ease, delay = 0 }) => {
  const [mouseOver, mouseOverRef] = useMouseOver<HTMLDivElement>();
  const [mouseDown, mouseDownRef, setDown] = useMouseDown<HTMLDivElement>();

  const style = useCSSProperties(
    {
      userSelect: "none",
      transition: `opacity ${timeout}ms ${ease} ${delay}ms`,
      opacity: mouseDown ? 0.8 : mouseOver ? 0.88 : 1,
      display: "inline-block",
    },
    [mouseOver, mouseDown]
  );

  return (
    <div
      style={style}
      ref={mergeRefs([mouseOverRef, mouseDownRef])}
      onTouchCancel={() => setDown(false)}
      onTouchEnd={() => setDown(false)}
    >
      {children}
    </div>
  );
};

export { ButtonOpacityTransition };
