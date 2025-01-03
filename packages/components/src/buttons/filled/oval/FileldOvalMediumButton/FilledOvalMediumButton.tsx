import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled, { css } from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalCss, rounded3XL } from "@nightfall-ui/css";
import { squareMediumButtonPadding } from "../../../css";

const filledOvalMediumButtonCss = css`
  ${regularNormalCss};
  ${squareMediumButtonPadding};
  ${rounded3XL};
  ${filledButtonCss};
`;

const StyledOvalFilledMediumButton = styled.button`
  ${filledOvalMediumButtonCss};
`;

const FilledOvalMediumButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledOvalFilledMediumButton {...props} ref={ref} />;
});

export { FilledOvalMediumButton, filledOvalMediumButtonCss };
