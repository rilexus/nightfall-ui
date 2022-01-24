import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  mediumInputPadding,
  inputCss,
} from "../../../css";
import { roundedLG } from "@nightfall-ui/theme";

const StyledSquareFilledMediumInput = styled.input`
  ${mediumInputPadding};
  ${roundedLG};

  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledMediumInput {...props} ref={outsideRef} />;
});
SquareFilledMediumInput.displayName = "SquareFilledMediumInput";
export { SquareFilledMediumInput };
