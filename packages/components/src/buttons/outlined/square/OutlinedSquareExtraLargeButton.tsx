import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";

import {
  outlinedButtonCss,
  squareButtonCss,
  squareExtraLargeButtonPadding,
} from "../../css";

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareExtraLargeButtonPadding}
  ${squareButtonCss};
`;

const OutlinedSquareExtraLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareLargeButton(props, outsideRef) {
  return <StyledOutlinedSquareLargeButton {...props} ref={outsideRef} />;
});

export { OutlinedSquareExtraLargeButton };
