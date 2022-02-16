import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalSMCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonSmall = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${scaleTransitionCss};
`;

const TextSmallButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonSmall {...props} ref={ref} />
    </ButtonJumpTransition>
  );
});
export { TextSmallButton };
