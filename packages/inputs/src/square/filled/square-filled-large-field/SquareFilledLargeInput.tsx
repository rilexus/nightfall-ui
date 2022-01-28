import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  largeInputPaddingCss,
  inputCss,
} from "../../../css";
import { roundedLG } from "@nightfall-ui/css";

const StyledSquareFilledLargeInput = styled.input`
  ${largeInputPaddingCss};
  ${roundedLG};
  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledLargeInput {...props} ref={outsideRef} />;
});

SquareFilledLargeInput.displayName = "SquareFilledLargeInput";
export { SquareFilledLargeInput };
