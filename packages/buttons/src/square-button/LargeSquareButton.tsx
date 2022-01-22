import React, { FC, HTMLAttributes } from "react";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../transitions";
import styled from "styled-components";
import { StyledStylesButton } from "../styleless-button";
import { regularNormalLGCss } from "@nightfall-ui/typography";
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px150, py50 } from "@nightfall-ui/theme";

const StyledLargeButton = styled(StyledStylesButton)`
  ${pillButtonColorCss};
  ${pillButtonBackgroundColorCss};
  ${regularNormalLGCss};
  border-radius: 0.3rem;
  // padding: 0.45rem 1.4rem;
  ${py50};
  ${px150};
`;

const LargeSquareButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <ButtonJumpTransition>
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

export { LargeSquareButton };
