import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalSMCss, rounded2XL } from "@nightfall-ui/css";
import { squareSmallButtonPadding } from "../../../css";

const StyledOvalFilledSmallButton = styled.button`
  ${regularNormalSMCss};
  ${rounded2XL};
  ${squareSmallButtonPadding};
  ${filledButtonCss};
`;

const FilledOvalSmallButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledOvalFilledSmallButton {...props} ref={ref} />;
});

export default FilledOvalSmallButton;
