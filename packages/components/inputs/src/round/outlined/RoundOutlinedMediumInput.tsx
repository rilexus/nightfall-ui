import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  mediumInputPadding,
  outlineInputCss,
  roundedFilledInputCss,
} from "../../css";
import { InputProps } from "../../types/InputProps.type";

const StyledRoundFilledMediumInput = styled.input<InputProps>`
  ${mediumInputPadding};
  ${roundedFilledInputCss};
  ${outlineInputCss};
`;

const RoundOutlinedMediumInput: FC<
  HTMLAttributes<HTMLInputElement> & InputProps
> = forwardRef(function RoundFilledMediumInput(props, ref) {
  //@ts-ignore
  return <StyledRoundFilledMediumInput {...props} ref={ref} />;
});

export { RoundOutlinedMediumInput };
