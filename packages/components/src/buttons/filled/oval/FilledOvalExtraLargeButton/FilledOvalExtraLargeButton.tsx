import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import { filledButtonCss } from "../../css";
import { rounded3XL } from "@nightfall-ui/css";
import { squareButtonCss, squareExtraLargeButtonPadding } from "../../../css";

const filledOvalExtraLargeButtonCss = css`
  ${squareButtonCss};
  ${filledButtonCss};
  ${squareExtraLargeButtonPadding};
  ${rounded3XL};
`;

const StyledFilledOvalLargeButton = styled.button`
  ${filledOvalExtraLargeButtonCss};
`;

const FilledOvalExtraLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledFilledOvalLargeButton {...props} ref={ref} />;
});

export { filledOvalExtraLargeButtonCss, FilledOvalExtraLargeButton };
