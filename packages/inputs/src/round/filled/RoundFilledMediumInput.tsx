import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { mediumInputPadding, roundedFilledInputCss } from "../../css";
import { RoundFilledLargeInput } from "./RoundFilledLargeInput";

const StyledRoundFilledMediumInput = styled.input`
  ${mediumInputPadding};
  ${roundedFilledInputCss};
`;

const RoundFilledMediumInput: FC<HTMLAttributes<HTMLInputElement>> = forwardRef(
  function RoundFilledMediumInput(props, ref) {
    //@ts-ignore
    return <StyledRoundFilledMediumInput {...props} ref={ref} />;
  }
);

export { RoundFilledMediumInput };
