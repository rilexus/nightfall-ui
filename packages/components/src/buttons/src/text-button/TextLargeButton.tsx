import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalLGCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { wordButtonCss } from "./css";

const StyledTextButtonLarge = styled(StyledStylesButton)`
  ${regularNormalLGCss};
  ${wordButtonCss};
`;

const TextLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledTextButtonLarge {...props} ref={outsideRef} />;
});
export { StyledTextButtonLarge, TextLargeButton };
