import React, { forwardRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { inputCss, largeInputPaddingCss, outlineInputCss } from "../../../css";
import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareFilledLargeInput = styled.input<InputProps>`
  ${largeInputPaddingCss};
  ${roundedLG};
  ${outlineInputCss};
  ${inputCss};
`;

const SquareOutlinedLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>(function SquareOutlinedLargeInput(props, outsideRef) {
  return <StyledSquareFilledLargeInput {...props} ref={outsideRef} />;
});

export { SquareOutlinedLargeInput };
