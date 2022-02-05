import React, { forwardRef, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalCss } from "@nightfall-ui/css";
import { filledButtonCss } from "../css";
import { squareMediumButtonPadding } from "../../css";

const mediumButtonPadding = css`
  ${squareMediumButtonPadding};
`;

const StyledMediumButton = styled(StyledStylesButton)`
  ${regularNormalCss};
  ${mediumButtonPadding};
  border-radius: 0.3rem;

  ${filledButtonCss}
`;

const FilledSquareMediumButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledMediumButton {...props} ref={outsideRef} />
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareMediumButton };
