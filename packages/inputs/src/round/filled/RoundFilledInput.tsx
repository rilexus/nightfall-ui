import React, { FC, HTMLAttributes } from "react";
import { RoundFilledSmallInput } from "./RoundFilledSmallInput";
import { RoundFilledMediumInput } from "./RoundFilledMediumInput";
import { RoundFilledLargeInput } from "./RoundFilledLargeInput";

const RoundFilledInput: FC<
  HTMLAttributes<HTMLInputElement> & { size?: "large" | "small" | "medium" }
> = ({ size = "medium", ...props }) => {
  switch (size) {
    case "small": {
      return <RoundFilledSmallInput {...props} />;
    }
    case "medium": {
      return <RoundFilledMediumInput {...props} />;
    }
    case "large": {
      return <RoundFilledLargeInput {...props} />;
    }
    default: {
      console.warn(`RoundFillInput with size: ${size} is not implemented!`);
      return <input {...props} />;
    }
  }
};

export { RoundFilledInput };
