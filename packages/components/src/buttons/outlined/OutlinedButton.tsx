import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { OutlinedSquareButton } from "./square";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../transitions";

const OutlinedButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    shape?: "square" | "round" | "oval";
    size?: "small" | "large" | "medium" | "extra-large";
  }
>(function OutlinedButton({ shape = "square", ...props }, outsideRef) {
  let button = null;
  switch (shape) {
    case "square": {
      button = <OutlinedSquareButton {...props} ref={outsideRef} />;
      break;
    }
    default: {
      console.warn(`OutlinedButton with shape: ${shape} is not implemented!`);
      button = <button {...props} />;
      break;
    }
  }
  return (
    <ButtonJumpTransition disabled={props.disabled}>
      <ButtonOpacityTransition disabled={props.disabled}>
        <ButtonScaleTransition disabled={props.disabled}>
          {button}
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { OutlinedButton };
