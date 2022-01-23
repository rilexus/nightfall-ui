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
  inputFocusCss,
  inputPlaceholderCss,
  outlinedInputBorderCss,
} from "../css";

const StyledSquareOutlinedMediumInput = styled.input`
  ${mx50};
  ${py50};
  ${px75};
  ${themedTextColor};
  ${regularNormalCss};
  ${roundedLG};
  outline: none;
  border: none;
  ${outlinedInputBorderCss};
  ${inputFocusCss};
  background: transparent;
  ${inputPlaceholderCss};
`;

const SquareOutlinedMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareOutlinedMediumInput {...props} ref={outsideRef} />;
});

SquareOutlinedMediumInput.displayName = "StyledSquareOutlinedMediumInput";

export { SquareOutlinedMediumInput };
