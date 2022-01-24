import React, { FC, HTMLAttributes } from "react";
import { FilledSquareMediumButton } from "./FilledSquareMediumButton";
import { FilledSquareSmallButton } from "./FilledSquareSmallButton";
import { FilledSquareLargeButton } from "./FilledSquareLargeButton";
import { FilledSquareExtraLargeButton } from "./FilledSquareExtraLargeButton";
import { ButtonSize } from "../../ButtonSize.type";

const FilledSquareButton: FC<
  HTMLAttributes<HTMLButtonElement> & { size?: ButtonSize }
> = ({ size = "medium", ...props }) => {
  if (size === "medium") {
    return <FilledSquareMediumButton {...props} />;
  }
  if (size === "small") {
    return <FilledSquareSmallButton {...props} />;
  }
  if (size === "large") {
    return <FilledSquareLargeButton {...props} />;
  }
  if (size === "extra-large") {
    return <FilledSquareExtraLargeButton {...props} />;
  }
  return <button {...props} />;
};

export { FilledSquareButton };
