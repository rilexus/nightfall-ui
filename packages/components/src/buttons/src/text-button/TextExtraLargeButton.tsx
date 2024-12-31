import styled from "styled-components";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { regularNormalXLCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { wordButtonCss } from "./css";

const StyledTextButtonExtraLarge = styled(StyledStylesButton)`
  ${regularNormalXLCss};
  ${wordButtonCss};
`;

const TextExtraLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, outsideRef) => {
  return <StyledTextButtonExtraLarge {...props} ref={outsideRef} />;
});
export { StyledTextButtonExtraLarge, TextExtraLargeButton };
