import React, { FC, forwardRef, HTMLAttributes } from "react";
import { RoundOutlinedSmallInput } from "./RoundOutlinedSmallInput";
import { RoundOutlinedMediumInput } from "./RoundOutlinedMediumInput";
import { RoundOutlinedLargeInput } from "./RoundOutlinedLargeInput";
import { InputProps } from "../../types/InputProps.type";

const RoundOutlinedInput: FC<
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
      return <RoundOutlinedSmallInput {...props} ref={outsideRef} />;
    }
    case "medium": {
      //@ts-ignore
      return <RoundOutlinedMediumInput {...props} ref={outsideRef} />;
    }
    case "large": {
      //@ts-ignore
      return <RoundOutlinedLargeInput {...props} ref={outsideRef} />;
    }
    default: {
      console.warn(`RoundFillInput with size: ${size} is not implemented!`);
      //@ts-ignore
      return <input {...props} ref={outsideRef} />;
    }
  }
});

export { RoundOutlinedInput };
