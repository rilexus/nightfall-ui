import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { largeInputPaddingCss, roundedFilledInputCss } from "../../css";

const StyledRoundFilledLargeInput = styled.input`
  ${roundedFilledInputCss};
  ${largeInputPaddingCss};
`;

const RoundFilledLargeInput: FC<HTMLAttributes<HTMLInputElement>> = forwardRef(
  function RoundFilledLargeInput(props, ref) {
    //@ts-ignore
    return <StyledRoundFilledLargeInput {...props} ref={ref} />;
  }
);

export { RoundFilledLargeInput, StyledRoundFilledLargeInput };
