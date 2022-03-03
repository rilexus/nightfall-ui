import React, { FC, forwardRef, HTMLAttributes } from "react";
import { FilledSquareInput } from "./filled";
import { OutlinedSquareInput } from "./outlined/OutlinedSquareInput";

const SquareInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    variant?: "filled" | "outlined";
    size?: "large" | "small" | "medium";
  }
> = forwardRef(function SquareInout(
  { variant = "filled", size = "medium", ...props },
  outsideRef
) {
  switch (variant) {
    case "filled": {
      //@ts-ignore
      return <FilledSquareInput size={size} {...props} ref={outsideRef} />;
    }
    case "outlined": {
      //@ts-ignore
      return <OutlinedSquareInput size={size} {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`SquareInput with variant: ${variant} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { SquareInput };
