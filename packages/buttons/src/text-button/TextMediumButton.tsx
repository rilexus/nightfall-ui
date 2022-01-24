import styled from "styled-components";
import { themedTextColor } from "@nightfall-ui/theme";
import React, { FC, forwardRef, HTMLAttributes } from "react";
import { regularNormalCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonMedium = styled(StyledStylesButton)`
  ${themedTextColor};
  ${regularNormalCss};
  ${scaleTransitionCss};
`;

const TextMediumButton: FC<HTMLAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonMedium {...props} ref={ref} />
    </ButtonJumpTransition>
  );
});
export { TextMediumButton, StyledTextButtonMedium };
