import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { TextMediumButton } from "./TextMediumButton";
import { ButtonSize } from "../ButtonSize.type";
import { TextSmallButton } from "./TextSmallButton";
import { TextLargeButton } from "./TextLargeButton";
import { TextExtraLargeButton } from "./TextExtraLargeButton";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../transitions";

const TextButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: ButtonSize }
>(({ size = "medium", ...props }, outsideRef) => {
  let button = null;
  switch (size) {
    case "medium": {
      button = <TextMediumButton {...props} ref={outsideRef} />;
      break;
    }
    case "large": {
      button = <TextLargeButton {...props} ref={outsideRef} />;
      break;
    }
    case "extra-large": {
      button = <TextExtraLargeButton {...props} ref={outsideRef} />;
      break;
    }
    case "small": {
      button = <TextSmallButton {...props} ref={outsideRef} />;
      break;
    }
    default:
      button = <button {...props} ref={outsideRef} />;
      break;
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

export { TextButton };
