import React, { forwardRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { filledButtonCss } from "../css";
import { squareButtonCss, squareLargeButtonPadding } from "../../css";
import { regularNormalLGCss } from "@nightfall-ui/css";

const filledSquareLargeButtonCss = css`
  ${regularNormalLGCss};
  ${squareLargeButtonPadding};
  ${filledButtonCss};
  ${squareButtonCss};
`;

const StyledLargeButton = styled(StyledStylesButton)`
  ${filledSquareLargeButtonCss};
`;

const FilledSquareLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledLargeButton {...props} ref={outsideRef} />;
});

export { FilledSquareLargeButton, filledSquareLargeButtonCss };
