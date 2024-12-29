import React, { FC, forwardRef, HTMLAttributes } from "react";
import { RoundFilledInput } from "./filled/RoundFilledInput";
import { InputProps } from "../types/InputProps.type";
import { RoundOutlinedInput } from "./outlined";

const RoundInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    variant?: "filled" | "outlined";
    size?: "large" | "small" | "medium";
  } & InputProps
> = forwardRef(function (
  { size = "medium", variant = "filled", ...props },
  outsideRef
) {
  switch (variant) {
    case "filled": {
      //@ts-ignore
      return <RoundFilledInput {...props} size={size} ref={outsideRef} />;
    }
    case "outlined": {
      //@ts-ignore
      return <RoundOutlinedInput {...props} size={size} ref={outsideRef} />;
    }
    default: {
      console.warn(`RoundInput with variant: ${variant} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { RoundInput };
