import React, { FC, HTMLAttributes } from "react";
import { TextMediumButton } from "./TextMediumButton";
import { ButtonSize } from "../ButtonSize.type";
import { TextSmallButton } from "./TextSmallButton";
import { TextLargeButton } from "./TextLargeButton";
import { TextExtraLargeButton } from "./TextExtraLargeButton";

const TextButton: FC<
  HTMLAttributes<HTMLButtonElement> & { size?: ButtonSize }
> = ({ size, ...props }) => {
  switch (size) {
    case "medium": {
      return <TextMediumButton {...props} />;
    }
    case "large": {
      return <TextLargeButton {...props} />;
    }
    case "extra-large": {
      return <TextExtraLargeButton {...props} />;
    }
    case "small": {
      return <TextSmallButton {...props} />;
    }
    default:
      return <button {...props} />;
  }
};

export { TextButton };
