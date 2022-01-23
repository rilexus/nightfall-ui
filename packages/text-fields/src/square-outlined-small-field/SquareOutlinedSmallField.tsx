import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  inputFocusCss,
  inputPlaceholderCss,
  outlinedInputBorderCss,
} from "../css";
import { px75, py37, roundedLG, themedTextColor } from "@nightfall-ui/theme";
import { regularNormalCss } from "@nightfall-ui/typography";

const StyledSquareOutlinedSmallInput = styled.input`
  outline: none;
  border: none;
  ${roundedLG};
  ${themedTextColor};
  ${px75};
  ${py37};
  ${regularNormalCss};
  background: transparent;
  ${outlinedInputBorderCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareOutlinedSmallField = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareOutlinedSmallInput {...props} ref={outsideRef} />;
});

export { SquareOutlinedSmallField };
