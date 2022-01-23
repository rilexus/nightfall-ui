import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
  squareFilledInputBorderCss,
} from "../css";
import { px75, py25, roundedLG, themedTextColor } from "@nightfall-ui/theme";
import { regularNormalCss } from "@nightfall-ui/typography";

const StyledSquareFilledSmallInput = styled.input`
  outline: none;
  ${squareFilledInputBorderCss};
  ${roundedLG};
  ${themedTextColor};
  ${px75};
  ${py25};
  ${regularNormalCss};
  ${filledInputBackgroundColorCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareFilledSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledSmallInput {...props} ref={outsideRef} />;
});

export { SquareFilledSmallInput };
