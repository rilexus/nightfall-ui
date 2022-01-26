import React, { forwardRef, HTMLAttributes } from "react";
import { OutlinedSquareSmallButton } from "./OutlinedSquareSmallButton";
import { OutlinedSquareMediumButton } from "./OutlinedSquareMediumButton";
import { OutlinedSquareLargeButton } from "./OutlinedSquareLargeButton";
import { OutlinedSquareExtraLargeButton } from "./OutlinedSquareExtraLargeButton";

const OutlinedSquareButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & {
    size?: "small" | "large" | "medium" | "extra-large";
  }
>(function OutlinedSquareButton({ size = "medium", ...props }, outsideRef) {
  switch (size) {
    case "small": {
      return <OutlinedSquareSmallButton {...props} ref={outsideRef} />;
    }
    case "medium": {
      return <OutlinedSquareMediumButton {...props} ref={outsideRef} />;
    }
    case "large": {
      return <OutlinedSquareLargeButton {...props} ref={outsideRef} />;
    }
    case "extra-large": {
      return <OutlinedSquareExtraLargeButton {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(
        `OutlinedSquareButton with size: ${size} is not implemented!`
      );
      return <button {...props} />;
    }
  }
});

export { OutlinedSquareButton };
