import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { mediumInputPadding, roundedInputCss } from "../../css";

const StyledRoundFilledMediumInput = styled.input`
  ${mediumInputPadding};
  ${roundedInputCss};
`;

const RoundFilledMediumInput: FC<HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledRoundFilledMediumInput {...props} />;
};

export { RoundFilledMediumInput };
