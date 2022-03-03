import React, { FC, forwardRef, HTMLAttributes } from "react";
import { SquareInput } from "../square/SquareInput";
import { RoundInput } from "../round/RoundInput";

const Input: FC<
  HTMLAttributes<HTMLInputElement> & {
    shape?: "square" | "round";
    size?: "small" | "large" | "medium";
    variant?: "filled" | "outlined";
  }
> = forwardRef(function Input(
  { size = "medium", shape = "square", ...props },
  outsideRef
) {
  switch (shape) {
    case "square": {
      //@ts-ignore
      return <SquareInput size={size} {...props} ref={outsideRef} />;
    }
    case "round": {
      //@ts-ignore
      return <RoundInput size={size} {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`Input: ${shape} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { Input };
