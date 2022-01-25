import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { mediumInputPadding, roundedFilledInputCss } from "../../css";

const StyledRoundFilledMediumInput = styled.input`
  ${mediumInputPadding};
  ${roundedFilledInputCss};
`;

const RoundFilledMediumInput: FC<HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <StyledRoundFilledMediumInput {...props} />;
};

export { RoundFilledMediumInput };
