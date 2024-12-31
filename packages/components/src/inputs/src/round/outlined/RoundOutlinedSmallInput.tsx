import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  outlineInputCss,
  roundedFilledInputCss,
  smallInputPadding,
} from "../../css";
import { InputProps } from "../../types/InputProps.type";

const StyledRoundOutlinedSmallInput = styled.input<InputProps>`
  ${smallInputPadding};
  ${roundedFilledInputCss};
  ${outlineInputCss};
`;

const RoundOutlinedSmallInput: FC<
  HTMLAttributes<HTMLInputElement> & InputProps
> = forwardRef(function RoundFilledSmallInput(props, ref) {
  //@ts-ignore
  return <StyledRoundOutlinedSmallInput {...props} ref={ref} />;
});

export { RoundOutlinedSmallInput };
