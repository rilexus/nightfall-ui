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
  squareMediumButtonPadding,
} from "../../css";

const StyledOutlinedMediumButton = styled.button`
  ${outlinedButtonCss};
  ${squareMediumButtonPadding};
  ${squareButtonCss};
`;

const OutlinedSquareMediumButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareMediumButton(props, outsideRef) {
  return (
    <ButtonJumpTransition>
      <ButtonScaleTransition>
        <ButtonOpacityTransition>
          <StyledOutlinedMediumButton {...props} ref={outsideRef} />
        </ButtonOpacityTransition>
      </ButtonScaleTransition>
    </ButtonJumpTransition>
  );
});

export { OutlinedSquareMediumButton };
