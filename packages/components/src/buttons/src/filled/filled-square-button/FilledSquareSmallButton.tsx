import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalSMCss } from "@nightfall-ui/css";

import { roundedMD } from "@nightfall-ui/css";
import { filledButtonCss } from "../css";
import { squareSmallButtonPadding } from "../../css";

const StyledSmallFilledButton = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${roundedMD};
  ${squareSmallButtonPadding};
  ${filledButtonCss};
`;

const FilledSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledSmallFilledButton {...props} ref={outsideRef} />;
});

export { FilledSquareSmallButton };
