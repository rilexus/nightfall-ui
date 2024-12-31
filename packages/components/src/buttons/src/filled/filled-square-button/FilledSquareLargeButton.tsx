import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { filledButtonCss } from "../css";
import { squareButtonCss, squareLargeButtonPadding } from "../../css";
import { regularNormalLGCss } from "@nightfall-ui/css";

const StyledLargeButton = styled(StyledStylesButton)`
  ${regularNormalLGCss};
  ${squareLargeButtonPadding};
  ${filledButtonCss};
  ${squareButtonCss};
`;

const FilledSquareLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledLargeButton {...props} ref={outsideRef} />;
});

export { FilledSquareLargeButton };
