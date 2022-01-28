import styled from "styled-components";
import React, { forwardRef, HTMLAttributes } from "react";
import { regularNormalCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonMedium = styled(StyledStylesButton)`
  ${regularNormalCss};
  ${scaleTransitionCss};
`;

const TextMediumButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonMedium {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { TextMediumButton, StyledTextButtonMedium };
