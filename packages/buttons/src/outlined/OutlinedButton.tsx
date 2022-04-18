import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { OutlinedSquareButton } from "./square";

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
  switch (shape) {
    case "square": {
      return <OutlinedSquareButton {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`OutlinedButton with shape: ${shape} is not implemented!`);
      return <button {...props} />;
    }
  }
});

export { OutlinedButton };
