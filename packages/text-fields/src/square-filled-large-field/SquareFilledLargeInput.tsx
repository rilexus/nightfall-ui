import React, { forwardRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import {
  mx50,
  px87,
  py87,
  roundedLG,
  roundedXL,
  themedTextColor,
} from "@nightfall-ui/theme";

import { regularNormalCss } from "@nightfall-ui/typography";
import {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
  squareFilledInputBorderCss,
} from "../css";

const StyledSquareFilledMediumInput = styled.input`
  ${mx50};
  ${py87};
  ${px87};
  ${themedTextColor};
  ${regularNormalCss};
  ${roundedLG};
  outline: none;
  ${squareFilledInputBorderCss};
  ${filledInputBackgroundColorCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareFilledLargeInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledMediumInput {...props} ref={outsideRef} />;
});

SquareFilledLargeInput.displayName = "SquareFilledLargeInput";
export { SquareFilledLargeInput };
