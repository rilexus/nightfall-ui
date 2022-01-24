import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { inputCss, largeInputPaddingCss, outlineInputCss } from "../../../css";
import { roundedLG } from "@nightfall-ui/theme";

const StyledSquareFilledLargeInput = styled.input`
  ${largeInputPaddingCss};
  ${roundedLG};

  ${outlineInputCss};
  ${inputCss};
`;

const SquareOutlinedLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledLargeInput {...props} ref={outsideRef} />;
});

SquareOutlinedLargeInput.displayName = "SquareOutlinedLargeInput";
export { SquareOutlinedLargeInput };
