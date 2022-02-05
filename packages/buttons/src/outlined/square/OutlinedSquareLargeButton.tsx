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

const StyledOutlinedSquareLargeButton = styled.button`
  ${outlinedButtonCss};
  ${squareLargeButtonPadding};
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
