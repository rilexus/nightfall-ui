import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  mediumInputPadding,
  inputCss,
} from "../../../css";
import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareFilledMediumInput = styled.input<InputProps>`
  ${mediumInputPadding};
  ${roundedLG};

  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, outsideRef) => {
  return <StyledSquareFilledMediumInput {...props} ref={outsideRef} />;
});
SquareFilledMediumInput.displayName = "SquareFilledMediumInput";
export { SquareFilledMediumInput };
