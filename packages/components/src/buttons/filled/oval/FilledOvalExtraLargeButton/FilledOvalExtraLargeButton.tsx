import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import styled from "styled-components";
import { filledButtonCss } from "../../css";
import { rounded3XL } from "@nightfall-ui/css";
import { squareButtonCss, squareExtraLargeButtonPadding } from "../../../css";

const StyledFilledOvalLargeButton = styled.button`
  ${squareButtonCss};
  ${filledButtonCss};
  ${squareExtraLargeButtonPadding};
  ${rounded3XL};
`;

const FilledOvalExtraLargeButton = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <StyledFilledOvalLargeButton {...props} ref={ref} />;
});

export default FilledOvalExtraLargeButton;
