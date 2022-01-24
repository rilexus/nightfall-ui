import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { largeInputPaddingCss, roundedInputCss } from "../../css";

const StyledRoundFilledLargeInput = styled.input`
  ${roundedInputCss};
  ${largeInputPaddingCss};
`;

const RoundFilledLargeInput: FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledRoundFilledLargeInput {...props} />;
};

export { RoundFilledLargeInput, StyledRoundFilledLargeInput };
