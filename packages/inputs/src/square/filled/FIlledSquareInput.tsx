import React, { FC, forwardRef, HTMLAttributes } from "react";
import { SquareFilledLargeInput } from "./square-filled-large-field";
import { SquareFilledMediumInput } from "./square-filled-medium-field";
import { SquareFilledSmallInput } from "./square-filled-small-field";

const FilledSquareInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    size: "large" | "small" | "medium" | "extra-large";
  }
> = forwardRef(function FilledSquareInput({ size, ...props }, outsideRef) {
  switch (size) {
    case "large": {
      //@ts-ignore
      return <SquareFilledLargeInput {...props} ref={outsideRef} />;
    }
    case "medium": {
      //@ts-ignore
      return <SquareFilledMediumInput {...props} ref={outsideRef} />;
    }
    case "small": {
      //@ts-ignore
      return <SquareFilledSmallInput {...props} ref={outsideRef} />;
    }
    default: {
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { FilledSquareInput };
