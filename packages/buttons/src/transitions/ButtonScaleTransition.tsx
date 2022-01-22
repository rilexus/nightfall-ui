import React, { FC } from "react";
import {
  useCSSProperties,
  useMouseDown,
  useMouseOver,
  useMouseUp,
  useTouch,
} from "@nightfall-ui/hooks";
import { Ease, mergeRefs } from "react-transitions-library";

const ButtonScaleTransition: FC<{
  timeout?: number;
  ease?: Ease;
  delay?: number;
}> = ({ children, timeout = 200, ease = Ease.ease, delay = 0 }) => {
  const [isOver, overRef] = useMouseOver();
  const [isDown, downRef] = useMouseDown();
  const [isTouched, touchRef] = useTouch();

  const style = useCSSProperties(
    {
      userSelect: "none",
      display: "inline-block",
      transition: `transform ${timeout}ms ${ease} ${delay}ms`,
      transform: `scale(${isTouched || isDown ? 0.93 : isOver ? 0.96 : 1})`,
    },
    [isDown, isOver, isTouched]
  );

  return (
    <div style={style} ref={mergeRefs([overRef, downRef, touchRef])}>
      {children}
    </div>
  );
};
export { ButtonScaleTransition };
