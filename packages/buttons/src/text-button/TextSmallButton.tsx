import styled from "styled-components";
import React, { forwardRef, HTMLAttributes } from "react";
import { regularNormalSMCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonSmall = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${scaleTransitionCss};
`;

const TextSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonSmall {...props} ref={ref} />
    </ButtonJumpTransition>
  );
});
export { TextSmallButton };
