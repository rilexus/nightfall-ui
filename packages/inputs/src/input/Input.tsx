import React, { FC, HTMLAttributes } from "react";
import { SquareInput } from "../square/SquareInput";
import { RoundInput } from "../round/RoundInput";

const Input: FC<
  HTMLAttributes<HTMLInputElement> & {
    shape?: "square" | "round";
    size?: "small" | "large" | "medium";
    variant?: "filled" | "outlined";
  }
> = ({ size = "medium", shape = "square", ...props }) => {
  switch (shape) {
    case "square": {
      return <SquareInput size={size} {...props} />;
    }
    case "round": {
      return <RoundInput size={size} {...props} />;
    }
    default: {
      console.warn(`Input: ${shape} is not implemented!`);
      return <input {...props} />;
    }
  }
};

export { Input };
