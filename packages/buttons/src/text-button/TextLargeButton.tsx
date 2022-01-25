import styled from "styled-components";
import { themedTextColor } from "@nightfall-ui/theme";
import React, { FC, forwardRef, HTMLAttributes } from "react";
import { regularNormalLGCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonLarge = styled(StyledStylesButton)`
  ${themedTextColor};
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
