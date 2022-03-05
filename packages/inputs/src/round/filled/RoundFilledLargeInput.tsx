import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { largeInputPaddingCss, roundedFilledInputCss } from "../../css";
import { InputProps } from "../../types/InputProps.type";

const StyledRoundFilledLargeInput = styled.input<InputProps>`
  ${roundedFilledInputCss};
  ${largeInputPaddingCss};
`;

const RoundFilledLargeInput: FC<HTMLAttributes<HTMLInputElement> & InputProps> =
  forwardRef(function RoundFilledLargeInput(props, ref) {
    //@ts-ignore
    return <StyledRoundFilledLargeInput {...props} ref={ref} />;
  });

export { RoundFilledLargeInput, StyledRoundFilledLargeInput };
