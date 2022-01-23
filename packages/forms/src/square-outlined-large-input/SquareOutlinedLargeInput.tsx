import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  mx50,
  px87,
  py87,
  roundedLG,
  themedTextColor,
} from "@nightfall-ui/theme";

import { regularNormalCss } from "@nightfall-ui/typography";
import {
  inputFocusCss,
  inputPlaceholderCss,
  outlinedInputBorderCss,
} from "../css";

const StyledSquareFilledLargeInput = styled.input`
  ${mx50};
  ${py87};
  ${px87};
  ${themedTextColor};
  ${regularNormalCss};
  ${roundedLG};
  outline: none;
  border: none;
  ${outlinedInputBorderCss};
  background: transparent;
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareOutlinedLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledLargeInput {...props} ref={outsideRef} />;
});

SquareOutlinedLargeInput.displayName = "SquareOutlinedLargeInput";
export { SquareOutlinedLargeInput };
