import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalCss, rounded3XL } from "@nightfall-ui/css";
import { squareMediumButtonPadding } from "../../../css";

const StyledOvalFilledMediumButton = styled.button`
  ${regularNormalCss};
  ${squareMediumButtonPadding};
  ${rounded3XL};
  ${filledButtonCss}
`;

const FilledOvalMediumButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledOvalFilledMediumButton {...props} ref={ref} />;
});

export default FilledOvalMediumButton;
