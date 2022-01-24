import React, { FC, HTMLAttributes } from "react";
import { SquareOutlinedMediumInput } from "./square-outlined-medium-field";
import { SquareOutlinedSmallInput } from "./square-outlined-small-field";
import { SquareOutlinedLargeInput } from "./square-outlined-large-field";

const OutlinedSquareInput: FC<
  HTMLAttributes<HTMLInputElement> & { size?: "medium" | "large" | "small" }
> = ({ size = "medium", ...props }) => {
  switch (size) {
    case "medium": {
      return <SquareOutlinedMediumInput {...props} />;
    }
    case "small": {
      return <SquareOutlinedSmallInput {...props} />;
    }
    case "large": {
      return <SquareOutlinedLargeInput {...props} />;
    }
    default: {
      return <input {...props} />;
    }
  }
};

export { OutlinedSquareInput };
