import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { largeInputPaddingCss, roundedFilledInputCss } from "../../css";

const StyledRoundFilledLargeInput = styled.input`
  ${roundedFilledInputCss};
  ${largeInputPaddingCss};
`;

const RoundFilledLargeInput: FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledRoundFilledLargeInput {...props} />;
};

export { RoundFilledLargeInput, StyledRoundFilledLargeInput };
