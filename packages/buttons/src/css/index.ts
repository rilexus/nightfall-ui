import { css } from "styled-components";
import {
  color,
  px100,
  px125,
  px150,
  py25,
  py37,
  py50,
  roundedMD,
} from "@nightfall-ui/css";

const filledBackgroundColor = css`
  background-color: ${color("gray3")};
`;

const buttonCss = css`
  border: none;
  outline: none;
  cursor: pointer;
`;

const squareSmallButtonPadding = css`
  ${py25};
  ${px100};
`;

const squareMediumButtonPadding = css`
  ${py37};
  ${px125};
`;

const squareLargeButtonPadding = css`
  ${py50};
  ${px150};
`;

const outlinedButtonBorder = css`
  border: 1px solid;
  border-color: ${color("gray3")};
`;

const squareButtonCss = css`
  ${roundedMD};
`;

const squareExtraLargeButtonPadding = css`
  ${py50};
  ${px150};
`;

const outlinedButtonCss = css`
  ${buttonCss};
  ${outlinedButtonBorder};
  ${roundedMD};
  background-color: transparent;
`;

export {
  filledBackgroundColor,
  buttonCss,
  squareButtonCss,
  squareSmallButtonPadding,
  outlinedButtonCss,
  squareExtraLargeButtonPadding,
  squareMediumButtonPadding,
  squareLargeButtonPadding,
};

export * from "./scaleTransition";
