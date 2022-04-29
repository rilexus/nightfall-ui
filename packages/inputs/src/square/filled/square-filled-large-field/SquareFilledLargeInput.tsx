import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  largeInputPaddingCss,
  inputCss,
} from "../../../css";
import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareFilledLargeInput = styled.input<InputProps>`
  ${largeInputPaddingCss};
  ${roundedLG};
  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, outsideRef) => {
  return <StyledSquareFilledLargeInput {...props} ref={outsideRef} />;
});

SquareFilledLargeInput.displayName = "SquareFilledLargeInput";
export default SquareFilledLargeInput;
