import React, { forwardRef, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalLGCss } from "@nightfall-ui/typography";
import { px150, py50, roundedMD } from "@nightfall-ui/theme";
import { filledButtonCss } from "../css";
import { squareButtonCss, squareLargeButtonPadding } from "../../css";

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
