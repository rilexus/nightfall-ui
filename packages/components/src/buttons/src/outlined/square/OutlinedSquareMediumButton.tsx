import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  outlinedButtonCss,
  squareButtonCss,
  squareMediumButtonPadding,
} from "../../css";

const StyledOutlinedMediumButton = styled.button`
  ${outlinedButtonCss};
  ${squareMediumButtonPadding};
  ${squareButtonCss};
`;

const OutlinedSquareMediumButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareMediumButton(props, outsideRef) {
  return <StyledOutlinedMediumButton {...props} ref={outsideRef} />;
});

export { OutlinedSquareMediumButton };
