import styled from "styled-components";
import { themedTextColor } from "@nightfall-ui/theme";
import React, { FC, HTMLAttributes } from "react";
import { regularNormalXLCss } from "@nightfall-ui/typography";
import { StyledStylesButton } from "../styleless-button";
import { scaleTransitionCss } from "../css";
import { ButtonJumpTransition } from "../transitions";

const StyledTextButtonExtraLarge = styled(StyledStylesButton)`
  ${themedTextColor};
  ${regularNormalXLCss};
  ${scaleTransitionCss}
`;

const ExtraLargeTextButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <ButtonJumpTransition>
      <StyledTextButtonExtraLarge {...props} />
    </ButtonJumpTransition>
  );
};
export { StyledTextButtonExtraLarge, ExtraLargeTextButton };
