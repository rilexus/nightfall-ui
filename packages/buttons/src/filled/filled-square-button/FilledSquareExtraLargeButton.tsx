import React, { forwardRef, HTMLAttributes } from "react";
import {
  ButtonOpacityTransition,
  ButtonJumpTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalXLCss } from "@nightfall-ui/typography";
import { px150, py50 } from "@nightfall-ui/theme";
import { filledButtonCss } from "../css";

const StyledLargeButton = styled(StyledStylesButton)`
  ${regularNormalXLCss};
  border-radius: 0.3rem;
  ${py50};
  ${px150};
  ${filledButtonCss};
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
            <StyledLargeButton {...props} ref={outsideRef} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareExtraLargeButton };
