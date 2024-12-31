import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  largeInputPaddingCss,
  outlineInputCss,
  roundedFilledInputCss,
} from "../../css";
import { InputProps } from "../../types/InputProps.type";

const StyledRoundFilledLargeInput = styled.input<InputProps>`
  ${roundedFilledInputCss};
  ${largeInputPaddingCss};
  ${outlineInputCss};
`;

const RoundOutlinedLargeInput: FC<
  HTMLAttributes<HTMLInputElement> & InputProps
> = forwardRef(function RoundFilledLargeInput(props, ref) {
  //@ts-ignore
  return <StyledRoundFilledLargeInput {...props} ref={ref} />;
});

export { RoundOutlinedLargeInput, StyledRoundFilledLargeInput };
