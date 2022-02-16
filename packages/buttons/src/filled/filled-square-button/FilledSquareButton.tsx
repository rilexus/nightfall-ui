import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { FilledSquareMediumButton } from "./FilledSquareMediumButton";
import { FilledSquareSmallButton } from "./FilledSquareSmallButton";
import { FilledSquareLargeButton } from "./FilledSquareLargeButton";
import { FilledSquareExtraLargeButton } from "./FilledSquareExtraLargeButton";
import { ButtonSize } from "../../ButtonSize.type";

const FilledSquareButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: ButtonSize }
>(({ size = "medium", ...props }, outsideRef) => {
  if (size === "medium") {
    return <FilledSquareMediumButton {...props} ref={outsideRef} />;
  }
  if (size === "small") {
    return <FilledSquareSmallButton {...props} ref={outsideRef} />;
  }
  if (size === "large") {
    return <FilledSquareLargeButton {...props} ref={outsideRef} />;
  }
  if (size === "extra-large") {
    return <FilledSquareExtraLargeButton {...props} ref={outsideRef} />;
  }
  return <button {...props} ref={outsideRef} />;
});

export { FilledSquareButton };
