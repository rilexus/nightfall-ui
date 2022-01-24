import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { inputCss, outlineInputCss, smallInputPadding } from "../../../css";
import { roundedLG } from "@nightfall-ui/theme";

const StyledSquareOutlinedSmallInput = styled.input`
  ${roundedLG};
  ${smallInputPadding};
  ${outlineInputCss};
  ${inputCss};
`;

const SquareOutlinedSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareOutlinedSmallInput {...props} ref={outsideRef} />;
});

export { SquareOutlinedSmallInput };
