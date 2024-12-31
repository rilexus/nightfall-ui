import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { RoundFilledSmallButton } from "./RoundFilledSmallButton";
import { ButtonSize } from "../../ButtonSize.type";
import { RoundFilledMediumButton } from "./RoundFilledMediumButton";
import { RoundFilledLargeButton } from "./RoundFilledLargeButton";
import { RoundFilledExtraLargeButton } from "./RoundFilledExtraLargeButton";

const RoundFilledButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: ButtonSize }
>(({ size = "medium", ...props }, outsideRef) => {
  switch (size) {
    case "small": {
      return <RoundFilledSmallButton {...props} ref={outsideRef} />;
    }
    case "medium": {
      return <RoundFilledMediumButton {...props} ref={outsideRef} />;
    }
    case "large": {
      return <RoundFilledLargeButton {...props} ref={outsideRef} />;
    }
    case "extra-large": {
      return <RoundFilledExtraLargeButton {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`FilledButton with size: ${size} is not implemented!`);
      return <button {...props} />;
    }
  }
});

export { RoundFilledButton };
