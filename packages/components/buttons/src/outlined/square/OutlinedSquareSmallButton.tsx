import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { outlinedButtonCss, squareSmallButtonPadding } from "../../css";

const StyledOutlinedSquareButton = styled.button`
  ${squareSmallButtonPadding};
  ${outlinedButtonCss};
`;

const OutlinedSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareSmallButton(props, outsideRef) {
  return <StyledOutlinedSquareButton {...props} ref={outsideRef} />;
});

export { OutlinedSquareSmallButton };
