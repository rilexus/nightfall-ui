import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { inputCss, mediumInputPadding, outlineInputCss } from "../../../css";
import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareOutlinedMediumInput = styled.input<InputProps>`
  ${mediumInputPadding};
  ${roundedLG};
  ${outlineInputCss};
  ${inputCss};
`;

const SquareOutlinedMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, outsideRef) => {
  return <StyledSquareOutlinedMediumInput {...props} ref={outsideRef} />;
});

SquareOutlinedMediumInput.displayName = "SquareOutlinedMediumInput";

export default SquareOutlinedMediumInput;
