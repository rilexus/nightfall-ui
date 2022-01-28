import styled from "styled-components";
import React, { forwardRef, HTMLAttributes } from "react";
import { regularNormalXLCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonExtraLarge = styled(StyledStylesButton)`
  ${regularNormalXLCss};
  ${scaleTransitionCss}
`;

const TextExtraLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonExtraLarge {...props} ref={outsideRef} />
    </ButtonJumpTransition>
  );
});
export { StyledTextButtonExtraLarge, TextExtraLargeButton };
