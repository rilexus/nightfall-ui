import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled from "styled-components";
import { filledButtonCss } from "../../css";
import { regularNormalLGCss, rounded3XL } from "@nightfall-ui/css";
import { squareButtonCss, squareLargeButtonPadding } from "../../../css";

const StyledFilledOvalLargeButton = styled.button`
  ${regularNormalLGCss};
  ${squareLargeButtonPadding};
  ${filledButtonCss};
  ${squareButtonCss};
  ${rounded3XL};
`;

const FilledOvalLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledFilledOvalLargeButton {...props} ref={ref} />;
});

export default FilledOvalLargeButton;
