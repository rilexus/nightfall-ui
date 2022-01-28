import React, { forwardRef, HTMLAttributes } from "react";
import { TextMediumButton } from "./TextMediumButton";
import { ButtonSize } from "../ButtonSize.type";
import { TextSmallButton } from "./TextSmallButton";
import { TextLargeButton } from "./TextLargeButton";
import { TextExtraLargeButton } from "./TextExtraLargeButton";

const TextButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & { size?: ButtonSize }
>(({ size, ...props }, outsideRef) => {
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
