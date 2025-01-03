import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalSMCss, rounded2XL } from "@nightfall-ui/css";
import { squareSmallButtonPadding } from "../../../css";

const filledOvalSmallButtonCss = css`
  ${regularNormalSMCss};
  ${rounded2XL};
  ${squareSmallButtonPadding};
  ${filledButtonCss};
`;

const StyledOvalFilledSmallButton = styled.button`
  ${filledOvalSmallButtonCss};
`;

const FilledOvalSmallButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledOvalFilledSmallButton {...props} ref={ref} />;
});

export { FilledOvalSmallButton, filledOvalSmallButtonCss };
