import React, { FC, forwardRef, HTMLAttributes } from "react";
import { RoundFilledSmallInput } from "./RoundFilledSmallInput";
import { RoundFilledMediumInput } from "./RoundFilledMediumInput";
import { RoundFilledLargeInput } from "./RoundFilledLargeInput";
import { InputProps } from "../../types/InputProps.type";

const RoundFilledInput: FC<
  HTMLAttributes<HTMLInputElement> & {
    size?: "large" | "small" | "medium";
  } & InputProps
> = forwardRef(function RoundFilledInput(
  { size = "medium", ...props },
  outsideRef
) {
  switch (size) {
    case "small": {
      //@ts-ignore
      return <RoundFilledSmallInput {...props} ref={outsideRef} />;
    }
    case "medium": {
      //@ts-ignore
      return <RoundFilledMediumInput {...props} ref={outsideRef} />;
    }
    case "large": {
      //@ts-ignore
      return <RoundFilledLargeInput {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`RoundFillInput with size: ${size} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { RoundFilledInput };
