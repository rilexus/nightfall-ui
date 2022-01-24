import React, { FC, HTMLAttributes } from "react";
import { TextButton } from "../text-button";
import { FilledButton } from "../filled";

type ButtonVariant = "filled" | "outlined" | "text";

const Button: FC<
  HTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: "medium" | "large" | "small" | "extra-large";
    shape?: "square" | "round";
  }
> = ({ variant = "filled", size = "medium", shape = "square", ...props }) => {
  switch (variant) {
    case "filled": {
      return <FilledButton {...props} size={size} shape={shape} />;
    }
    case "text": {
      return <TextButton {...props} />;
    }
    default:
      return <button {...props} />;
  }
};

export { Button };
