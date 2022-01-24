import styled from "styled-components";
import { themedTextColor } from "@nightfall-ui/theme";
import React, { FC, forwardRef, HTMLAttributes } from "react";
import { regularNormalSMCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonSmall = styled(StyledStylesButton)`
  ${themedTextColor};
  ${regularNormalSMCss};
  ${scaleTransitionCss};
`;

const TextSmallButton: FC<HTMLAttributes<HTMLButtonElement>> = forwardRef<
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
