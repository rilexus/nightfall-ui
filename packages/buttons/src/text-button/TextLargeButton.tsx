import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalLGCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonLarge = styled(StyledStylesButton)`
  ${regularNormalLGCss};
  ${scaleTransitionCss};
`;

const TextLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonLarge {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { StyledTextButtonLarge, TextLargeButton };
