import React, { FC, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalCss } from "@nightfall-ui/typography";
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px125, py37 } from "@nightfall-ui/theme";
import { filledButtonClickAnimation } from "./css";

const mediumButtonPadding = css`
  ${py37};
  ${px125};
`;

const StyledMediumButton = styled(StyledStylesButton)`
  ${pillButtonColorCss};
  ${regularNormalCss};
  ${mediumButtonPadding};
  ${pillButtonBackgroundColorCss};
  border-radius: 0.3rem;
  ${filledButtonClickAnimation};
`;

const FilledSquareMediumButton: FC<HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledMediumButton {...props} />
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
};

export { FilledSquareMediumButton };
