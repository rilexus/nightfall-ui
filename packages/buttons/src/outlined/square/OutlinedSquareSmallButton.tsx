import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { outlinedButtonCss, squareSmallButtonPadding } from "../../css";
import { regularNormalSMCss } from "@nightfall-ui/typography";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";

const StyledOutlinedSquareButton = styled.button`
  ${squareSmallButtonPadding};
  ${outlinedButtonCss};
  ${regularNormalSMCss};
`;

const OutlinedSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function OutlinedSquareSmallButton(props, outsideRef) {
  return (
    <ButtonJumpTransition>
      <ButtonScaleTransition>
        <ButtonOpacityTransition>
          <StyledOutlinedSquareButton {...props} ref={outsideRef} />
        </ButtonOpacityTransition>
      </ButtonScaleTransition>
    </ButtonJumpTransition>
  );
});

export { OutlinedSquareSmallButton };
