import React, { FC, HTMLAttributes } from "react";
import { ButtonSize } from "../ButtonSize.type";
import { FilledSquareButton } from "./filled-square-button/FilledSquareButton";

const FilledButton: FC<
  HTMLAttributes<HTMLButtonElement> & {
    shape: "square" | "round";
    size?: ButtonSize;
  }
> = ({ shape, ...props }) => {
  switch (shape) {
    case "square": {
      return <FilledSquareButton {...props} />;
    }
    default: {
      return <button {...props} />;
    }
  }
};

export { FilledButton };
