import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalXLCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonExtraLarge = styled(StyledStylesButton)`
  ${regularNormalXLCss};
  ${scaleTransitionCss};
`;

const TextExtraLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonExtraLarge {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { StyledTextButtonExtraLarge, TextExtraLargeButton };
