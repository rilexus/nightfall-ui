import React, { FC, forwardRef, HTMLAttributes } from "react";
import { SquareOutlinedMediumInput } from "./square-outlined-medium-field";
import { SquareOutlinedSmallInput } from "./square-outlined-small-field";
import { SquareOutlinedLargeInput } from "./square-outlined-large-field";
import { InputProps } from "../../types/InputProps.type";

const OutlinedSquareInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    size?: "medium" | "large" | "small";
  } & InputProps
> = forwardRef(function OutlinedSquareInput(
  { size = "medium", ...props },
  outsideRef
) {
  switch (size) {
    case "medium": {
      //@ts-ignore
      return <SquareOutlinedMediumInput {...props} ref={outsideRef} />;
    }
    case "small": {
      //@ts-ignore
      return <SquareOutlinedSmallInput {...props} ref={outsideRef} />;
    }
    case "large": {
      //@ts-ignore
      return <SquareOutlinedLargeInput {...props} ref={outsideRef} />;
    }
    default: {
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { OutlinedSquareInput };
