import React, { FC, HTMLAttributes } from "react";
import { FilledSquareInput } from "./filled";
import { OutlinedSquareInput } from "./outlined/OutlinedSquareInput";

const SquareInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    variant?: "filled" | "outlined";
    size?: "large" | "small" | "medium";
  }
> = ({ variant = "filled", size = "medium", ...props }) => {
  switch (variant) {
    case "filled": {
      return <FilledSquareInput size={size} {...props} />;
    }
    case "outlined": {
      return <OutlinedSquareInput size={size} {...props} />;
    }
    default: {
      console.warn(`SquareInput with variant: ${variant} is not implemented!`);
      return <input {...props} />;
    }
  }
};

export { SquareInput };
