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
  squareExtraLargeButtonPadding,
} from "../../css";
import { regularNormalLGCss } from "@nightfall-ui/typography";

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareExtraLargeButtonPadding}
  ${regularNormalLGCss};
  ${squareButtonCss};
`;

const OutlinedSquareExtraLargeButton = forwardRef<
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

export { OutlinedSquareExtraLargeButton };
