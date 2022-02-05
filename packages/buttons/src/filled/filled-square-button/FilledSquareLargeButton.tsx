import React, { forwardRef, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
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
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledLargeButton {...props} ref={outsideRef} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareLargeButton };
