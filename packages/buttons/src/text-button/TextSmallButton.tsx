import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled from "styled-components";
import { regularNormalSMCss } from "@nightfall-ui/css";
import { StyledStylesButton } from "../styleless-button";
import { wordButtonCss } from "./css";

const StyledTextButtonSmall = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${wordButtonCss};
`;

const TextSmallButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledTextButtonSmall {...props} ref={ref} />;
});
export { TextSmallButton };
