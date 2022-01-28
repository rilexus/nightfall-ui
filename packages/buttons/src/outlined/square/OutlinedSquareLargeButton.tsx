import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import {
  outlinedButtonCss,
  squareButtonCss,
  squareLargeButtonPadding,
} from "../../css";
import { regularNormalCss } from "@nightfall-ui/typography";

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareLargeButtonPadding};
  ${regularNormalCss};
  ${squareButtonCss};
`;

const OutlinedSquareLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareLargeButton(props, outsideRef) {
  return (
    <ButtonJumpTransition>
      <ButtonScaleTransition>
        <ButtonOpacityTransition>
          <StyledOutlinedSquareLargeButton {...props} ref={outsideRef} />
        </ButtonOpacityTransition>
      </ButtonScaleTransition>
    </ButtonJumpTransition>
  );
});

export { OutlinedSquareLargeButton };
