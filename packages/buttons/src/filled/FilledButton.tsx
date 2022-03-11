import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { ButtonSize } from "../ButtonSize.type";
import { FilledSquareButton } from "./filled-square-button/FilledSquareButton";
import { RoundFilledButton } from "./round";

const FilledButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    shape?: "square" | "round";
    size?: ButtonSize;
  }
>(({ shape = "square", size = "medium", ...props }, outsideRef) => {
  switch (shape) {
    case "square": {
      return <FilledSquareButton {...props} size={size} ref={outsideRef} />;
    }
    case "round": {
      return <RoundFilledButton {...props} size={size} ref={outsideRef} />;
    }
    default: {
      return <button {...props} />;
    }
  }
});

export default FilledButton;
export { FilledButton };
