import React, { FC, forwardRef, HTMLAttributes } from "react";
import { RoundFilledButton } from "./RoundFilledButton";

const RoundButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & {
    variant?: "filled" | "outlined";
    size?: "large" | "medium" | "small";
  }
>(({ variant = "filled", size = "medium", ...props }, outsideRef) => {
  switch (variant) {
    case "filled": {
      return <RoundFilledButton {...props} size={size} ref={outsideRef} />;
    }
    default: {
      console.warn(`RoundButton with variant: ${variant} is not implemented!`);
      return <button {...props} />;
    }
  }
});

export { RoundButton };
