import React, { forwardRef, HTMLAttributes } from "react";
import {
  ButtonOpacityTransition,
  ButtonJumpTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
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
  return (
    <ButtonJumpTransition to={1.05}>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledExtraLargeButton {...props} ref={outsideRef} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareExtraLargeButton };
