import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  filledInputBorderCss,
  inputCss,
  smallInputPadding,
} from "../../../css";

import { roundedLG } from "@nightfall-ui/theme";

const StyledSquareFilledSmallInput = styled.input`
  ${filledInputBorderCss};
  ${roundedLG};

  ${smallInputPadding};
  ${filledInputBackgroundColorCss};

  ${inputCss};
`;

const SquareFilledSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareFilledSmallInput {...props} ref={outsideRef} />;
});

export { SquareFilledSmallInput };
