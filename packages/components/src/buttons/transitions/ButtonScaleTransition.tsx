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
  disabled?: boolean;
}> = ({ disabled, children, timeout = 200, ease = Ease.ease, delay = 0 }) => {
  const [isOver, overRef] = useMouseOver();
  const [isDown, downRef] = useMouseDown();
  const [isTouched, touchRef] = useTouch();

  const style = useCSSProperties(
    {
      userSelect: "none",
      display: "inline-block",
      ...(!disabled
        ? {
            transition: `transform ${timeout}ms ${ease} ${delay}ms`,
            transform: `scale(${
              isTouched || isDown ? 0.93 : isOver ? 0.97 : 1
            })`,
          }
        : {}),
    },
    [isDown, isOver, isTouched, disabled]
  );

  return (
    <div style={style} ref={mergeRefs([overRef, downRef, touchRef])}>
      {children}
    </div>
  );
};
export { ButtonScaleTransition };
