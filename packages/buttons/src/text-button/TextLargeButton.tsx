import styled from "styled-components";
import { themedTextColor } from "@nightfall-ui/theme";
import React, { FC, HTMLAttributes } from "react";
import { regularNormalLGCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonLarge = styled(StyledStylesButton)`
  ${themedTextColor};
  ${regularNormalLGCss};
  ${scaleTransitionCss};
`;

const TextLargeButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonLarge {...props} />
    </ButtonJumpTransition>
  );
};
export { StyledTextButtonLarge, TextLargeButton };
