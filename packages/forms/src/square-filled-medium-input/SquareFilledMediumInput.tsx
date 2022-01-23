import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  mx50,
  px75,
  py50,
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
  ${py50};
  ${px75};
  ${themedTextColor};
  ${regularNormalCss};
  ${roundedLG};
  outline: none;
  ${squareFilledInputBorderCss};
  ${filledInputBackgroundColorCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareFilledMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledMediumInput {...props} ref={outsideRef} />;
});
SquareFilledMediumInput.displayName = "SquareFilledMediumInput";
export { SquareFilledMediumInput };
