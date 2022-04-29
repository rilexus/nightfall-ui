import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";

import {
  outlinedButtonCss,
  squareButtonCss,
  squareLargeButtonPadding,
} from "../../css";

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareLargeButtonPadding};
  ${squareButtonCss};
`;

const OutlinedSquareLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareLargeButton(props, outsideRef) {
  return <StyledOutlinedSquareLargeButton {...props} ref={outsideRef} />;
});

export { OutlinedSquareLargeButton };
