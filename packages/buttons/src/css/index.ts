import { css } from "styled-components";
import {
  greyColor,
  px100,
  px125,
  px150,
  py12,
  py25,
  py37,
  py50,
  roundedMD,
  themedTextColor,
} from "@nightfall-ui/theme";

const filledBackgroundColor = css`
  background-color: ${greyColor(8)};
`;

const buttonCss = css`
  ${themedTextColor};
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
  border-color: ${greyColor(8)};
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
