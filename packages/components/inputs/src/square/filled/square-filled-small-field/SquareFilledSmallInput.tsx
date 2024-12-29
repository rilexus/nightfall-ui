import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  inputCss,
  smallInputPadding,
} from "../../../css";

import { roundedLG } from "@nightfall-ui/css";
import { InputProps } from "../../../types/InputProps.type";

const StyledSquareFilledSmallInput = styled.input<InputProps>`
  ${filledInputBorderCss};
  ${roundedLG};

  ${smallInputPadding};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, outsideRef) => {
  return <StyledSquareFilledSmallInput {...props} ref={outsideRef} />;
});

export default SquareFilledSmallInput;
