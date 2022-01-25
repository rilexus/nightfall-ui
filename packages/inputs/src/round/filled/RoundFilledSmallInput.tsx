import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { roundedFilledInputCss, smallInputPadding } from "../../css";

const StyledRoundFilledSmallInput = styled.input`
  ${smallInputPadding};
  ${roundedFilledInputCss};
`;

const RoundFilledSmallInput: FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledRoundFilledSmallInput {...props} />;
};

export { RoundFilledSmallInput };
