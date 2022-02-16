import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonMedium = styled(StyledStylesButton)`
  ${regularNormalCss};
  ${scaleTransitionCss};
`;

const TextMediumButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonMedium {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { TextMediumButton, StyledTextButtonMedium };
