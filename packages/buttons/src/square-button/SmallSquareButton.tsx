import React, { FC, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../styleless-button";
import { regularNormalSMCss } from "@nightfall-ui/typography";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../transitions";
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px100, py25 } from "@nightfall-ui/theme";

const smallPillButtonBorderRadius = css`
  border-radius: 0.3rem;
`;

const StyledSmallPillButton = styled(StyledStylesButton)`
  ${pillButtonColorCss};
  ${regularNormalSMCss};
  ${pillButtonBackgroundColorCss};
  ${smallPillButtonBorderRadius};
  ${py25};
  ${px100};
`;

const SmallSquareButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledSmallPillButton {...props} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
};

export { SmallSquareButton };
