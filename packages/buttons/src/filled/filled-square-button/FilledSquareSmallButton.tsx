import React, { forwardRef, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalSMCss } from "@nightfall-ui/css";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import { roundedMD } from "@nightfall-ui/css";
import { filledButtonCss } from "../css";
import { squareSmallButtonPadding } from "../../css";

const smallPillButtonBorderRadius = css`
  ${roundedMD};
`;

const StyledSmallFilledButton = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${smallPillButtonBorderRadius};
  ${squareSmallButtonPadding};
  ${filledButtonCss}
`;

const FilledSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledSmallFilledButton {...props} ref={outsideRef} />
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareSmallButton };
