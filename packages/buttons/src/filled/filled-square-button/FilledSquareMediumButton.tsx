import React, { FC, forwardRef, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalCss } from "@nightfall-ui/typography";
import { px125, py37 } from "@nightfall-ui/theme";
import { filledButtonCss } from "../css";

const mediumButtonPadding = css`
  ${py37};
  ${px125};
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
