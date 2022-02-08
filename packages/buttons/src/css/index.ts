import { css } from "styled-components";
import {
  color,
  px100,
  px125,
  px150,
  px175,
  py25,
  py37,
  py50,
  py62,
  roundedMD,
  textColorCss,
} from "@nightfall-ui/css";
import { bodyRegularPrimaryCss } from "@nightfall-ui/theme";

const buttonCss = css`
  ${textColorCss};
  ${bodyRegularPrimaryCss};
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

const squareExtraLargeButtonPadding = css`
  ${py62};
  ${px175};
`;

const outlinedButtonBorder = css`
  border: 1px solid;
  border-color: ${color("gray.3")};
`;

const squareButtonCss = css`
  ${roundedMD};
`;

const outlinedButtonCss = css`
  ${buttonCss};
  ${outlinedButtonBorder};
  ${roundedMD};
  background-color: transparent;
`;

const buttonScaleTransition = css`
  transition: transform 200ms ease 0ms, opacity 200ms ease 0ms;
  transform: scale(100%);
  opacity: 1;
  &:hover {
    opacity: 0.8;
    transform: scale(97%);
  }
  &:active {
    opacity: 0.7;
    transform: scale(95%);
  }
`;

export {
  buttonScaleTransition,
  buttonCss,
  squareButtonCss,
  squareSmallButtonPadding,
  outlinedButtonCss,
  squareExtraLargeButtonPadding,
  squareMediumButtonPadding,
  squareLargeButtonPadding,
};

export * from "./scaleTransition";
