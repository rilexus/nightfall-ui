import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { roundedInputCss, smallInputPadding } from "../../css";

const StyledRoundFilledSmallInput = styled.input`
  ${smallInputPadding};
  ${roundedInputCss};
`;

const RoundFilledSmallInput: FC<HTMLAttributes<HTMLInputElement>> = (props) => {
  return <StyledRoundFilledSmallInput {...props} />;
};

export { RoundFilledSmallInput };
