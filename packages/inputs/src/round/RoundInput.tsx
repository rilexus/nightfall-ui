import React, { FC, HTMLAttributes } from "react";
import { RoundFilledInput } from "./filled/RoundFilledInput";

const RoundInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    variant?: "filled" | "outlined";
    size?: "large" | "small" | "medium";
  }
> = ({ size = "medium", variant = "filled", ...props }) => {
  switch (variant) {
    case "filled": {
      return <RoundFilledInput {...props} size={size} />;
    }
    default: {
      console.warn(`RoundInput with variant: ${variant} is not implemented!`);
      return <input {...props} />;
    }
  }
};

export { RoundInput };
