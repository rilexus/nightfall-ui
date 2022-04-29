import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { inputCss, outlineInputCss, smallInputPadding } from "../../../css";
import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareOutlinedSmallInput = styled.input<InputProps>`
  ${roundedLG};
  ${smallInputPadding};
  ${outlineInputCss};
  ${inputCss};
`;

const SquareOutlinedSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, outsideRef) => {
  return <StyledSquareOutlinedSmallInput {...props} ref={outsideRef} />;
});

export default SquareOutlinedSmallInput;
