import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { ButtonSize } from "../ButtonSize.type";
import { FilledSquareButton } from "./filled-square-button/FilledSquareButton";
import { RoundFilledButton } from "./round";
import { OvalFilledButton } from "./oval";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../transitions";

const FilledButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    shape?: "square" | "round" | "oval";
    size?: ButtonSize;
  }
>(({ shape = "square", size = "medium", ...props }, outsideRef) => {
  let button = null;
  switch (shape) {
    case "square": {
      button = <FilledSquareButton {...props} size={size} ref={outsideRef} />;
      break;
    }
    case "oval": {
      button = <OvalFilledButton {...props} size={size} ref={outsideRef} />;
      break;
    }
    case "round": {
      button = <RoundFilledButton {...props} size={size} ref={outsideRef} />;
      break;
    }
    default: {
      button = <button {...props} />;
      break;
    }
  }
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>{button}</ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export default FilledButton;
export { FilledButton };
