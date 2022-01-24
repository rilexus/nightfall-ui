import React, { FC, HTMLAttributes } from "react";
import { SquareFilledLargeInput } from "./square-filled-large-field";
import { SquareFilledMediumInput } from "./square-filled-medium-field";
import { SquareFilledSmallInput } from "./square-filled-small-field";

const FilledSquareInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    size: "large" | "small" | "medium" | "extra-large";
  }
> = ({ size, ...props }) => {
  switch (size) {
    case "large": {
      return <SquareFilledLargeInput {...props} />;
    }
    case "medium": {
      return <SquareFilledMediumInput {...props} />;
    }
    case "small": {
      return <SquareFilledSmallInput {...props} />;
    }
    default: {
      return <input {...props} />;
    }
  }
};

export { FilledSquareInput };
