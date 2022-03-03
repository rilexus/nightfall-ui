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

const TextButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: ButtonSize }
>(({ size = "medium", ...props }, outsideRef) => {
  switch (size) {
    case "medium": {
      return <TextMediumButton {...props} ref={outsideRef} />;
    }
    case "large": {
      return <TextLargeButton {...props} ref={outsideRef} />;
    }
    case "extra-large": {
      return <TextExtraLargeButton {...props} ref={outsideRef} />;
    }
    case "small": {
      return <TextSmallButton {...props} ref={outsideRef} />;
    }
    default:
      return <button {...props} ref={outsideRef} />;
  }
});

export { TextButton };
