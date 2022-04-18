import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { ButtonSize } from "../../ButtonSize.type";
import { FilledOvalSmallButton } from "./FilledOvalSmallButton";
import { FilledOvalMediumButton } from "./FileldOvalMediumButton";
import { FilledOvalLargeButton } from "./FilledOvalLargeButton";
import { FilledOvalExtraLargeButton } from "./FilledOvalExtraLargeButton";

const OvalFilledButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { size?: ButtonSize }
>(({ size, ...props }, ref) => {
  switch (size) {
    case "small": {
      return <FilledOvalSmallButton {...props} ref={ref} />;
    }
    case "medium": {
      return <FilledOvalMediumButton {...props} ref={ref} />;
    }
    case "large": {
      return <FilledOvalLargeButton {...props} ref={ref} />;
    }
    case "extra-large": {
      return <FilledOvalExtraLargeButton {...props} ref={ref} />;
    }
    default: {
      console.log(`Oval button with size: ${size} is not implemented.`);
      return <button {...props} ref={ref} />;
    }
  }
});

export default OvalFilledButton;
