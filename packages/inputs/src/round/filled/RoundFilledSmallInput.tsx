import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { roundedFilledInputCss, smallInputPadding } from "../../css";
import { InputProps } from "../../types/InputProps.type";

const StyledRoundFilledSmallInput = styled.input<InputProps>`
  ${smallInputPadding};
  ${roundedFilledInputCss};
`;

const RoundFilledSmallInput: FC<HTMLAttributes<HTMLInputElement> & InputProps> =
  forwardRef(function RoundFilledSmallInput(props, ref) {
    //@ts-ignore
    return <StyledRoundFilledSmallInput {...props} ref={ref} />;
  });

export { RoundFilledSmallInput };
