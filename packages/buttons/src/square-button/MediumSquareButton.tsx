import React, { FC } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../transitions";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../styleless-button";
import { regularNormalCss } from "@nightfall-ui/typography";
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px125, py37 } from "@nightfall-ui/theme";

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
`;

const MediumSquareButton: FC = (props) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledMediumButton {...props} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
};

export { MediumSquareButton };
