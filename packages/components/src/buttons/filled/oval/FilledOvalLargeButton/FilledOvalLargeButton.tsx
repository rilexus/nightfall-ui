import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalLGCss, rounded3XL } from "@nightfall-ui/css";
import { squareButtonCss, squareLargeButtonPadding } from "../../../css";

const filledOvalLargeButtonCss = css`
  ${regularNormalLGCss};
  ${squareLargeButtonPadding};
  ${filledButtonCss};
  ${squareButtonCss};
  ${rounded3XL};
`;

const StyledFilledOvalLargeButton = styled.button`
  ${filledOvalLargeButtonCss};
`;

const FilledOvalLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledFilledOvalLargeButton {...props} ref={ref} />;
});

export { FilledOvalLargeButton, filledOvalLargeButtonCss };
