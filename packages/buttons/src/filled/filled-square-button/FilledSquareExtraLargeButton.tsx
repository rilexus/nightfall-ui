import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { filledButtonCss } from "../css";
import { squareButtonCss, squareExtraLargeButtonPadding } from "../../css";

const StyledExtraLargeButton = styled(StyledStylesButton)`
  ${squareButtonCss};
  ${filledButtonCss};
  ${squareExtraLargeButtonPadding};
`;

const FilledSquareExtraLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledExtraLargeButton {...props} ref={outsideRef} />;
});

export { FilledSquareExtraLargeButton };
