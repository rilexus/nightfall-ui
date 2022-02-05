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

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareExtraLargeButtonPadding}
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
