import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { wordButtonCss } from "./css";

const StyledTextButtonMedium = styled(StyledStylesButton)`
  ${regularNormalCss};
  ${wordButtonCss};
`;

const TextMediumButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledTextButtonMedium {...props} ref={outsideRef} />;
});
export { TextMediumButton, StyledTextButtonMedium };
