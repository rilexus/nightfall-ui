import styled from "styled-components";
import React, { forwardRef, HTMLAttributes } from "react";
import { regularNormalLGCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonLarge = styled(StyledStylesButton)`
  ${regularNormalLGCss};
  ${scaleTransitionCss};
`;

const TextLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonLarge {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { StyledTextButtonLarge, TextLargeButton };
