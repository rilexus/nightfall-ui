import React, { forwardRef, HTMLAttributes } from "react";
import { OutlinedSquareButton } from "./square";

const OutlinedButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & {
    shape?: "square" | "round";
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
