import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { roundedFilledInputCss, smallInputPadding } from "../../css";

const StyledRoundFilledSmallInput = styled.input`
  ${smallInputPadding};
  ${roundedFilledInputCss};
`;

const RoundFilledSmallInput: FC<HTMLAttributes<HTMLInputElement>> = forwardRef(
  function RoundFilledSmallInput(props, ref) {
    //@ts-ignore
    return <StyledRoundFilledSmallInput {...props} ref={ref} />;
  }
);

export { RoundFilledSmallInput };
