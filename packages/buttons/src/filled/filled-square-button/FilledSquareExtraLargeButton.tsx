import React, { FC, HTMLAttributes } from "react";
import {
  ButtonOpacityTransition,
  ButtonJumpTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
import styled from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalXLCss } from "@nightfall-ui/typography";
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px150, py50 } from "@nightfall-ui/theme";
import { filledButtonClickAnimation } from "./css";

const StyledLargeButton = styled(StyledStylesButton)`
  ${pillButtonColorCss};
  ${pillButtonBackgroundColorCss};
  ${regularNormalXLCss};
  border-radius: 0.3rem;
  ${py50};
  ${px150};
  ${filledButtonClickAnimation};
`;

const FilledSquareExtraLargeButton: FC<HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <ButtonJumpTransition to={1.05}>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledLargeButton {...props} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
};

export { FilledSquareExtraLargeButton };
