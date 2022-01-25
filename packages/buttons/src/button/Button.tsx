import React, { forwardRef, HTMLAttributes } from "react";
import { TextButton } from "../text-button";
import { FilledButton } from "../filled";

type ButtonVariant = "filled" | "outlined" | "text";

const Button = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: "medium" | "large" | "small" | "extra-large";
    shape?: "square" | "round";
  }
>(
  (
    { variant = "filled", size = "medium", shape = "square", ...props },
    outsideRef
  ) => {
    switch (variant) {
      case "filled": {
        return (
          <FilledButton {...props} size={size} shape={shape} ref={outsideRef} />
        );
      }
      case "text": {
        return <TextButton {...props} size={size} ref={outsideRef} />;
      }
      default: {
        console.warn(`Button with variant: ${variant} is not implemented!`);
        return <button {...props} />;
      }
    }
  }
);

export { Button };
