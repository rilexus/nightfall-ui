import React, { FC, forwardRef, HTMLAttributes } from "react";
import { SquareInput } from "../square";
import { RoundInput } from "../round";

const Input: FC<
  HTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
    shape?: "square" | "round";
    size?: "small" | "large" | "medium";
    variant?: "filled" | "outlined";
    placeholder?: string;
  }
> = forwardRef(function Input(
  { size = "medium", shape = "square", ...props },
  outsideRef
) {
  switch (shape) {
    case "square": {
      //@ts-ignore
      return <SquareInput {...props} size={size} ref={outsideRef} />;
    }
    case "round": {
      //@ts-ignore
      return <RoundInput {...props} size={size} ref={outsideRef} />;
    }
    default: {
      console.warn(`Input: ${shape} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { Input };
