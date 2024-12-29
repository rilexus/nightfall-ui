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
import { bodyRegularPrimaryCss } from "@nightfall-ui/typography";

const buttonCss = css`
  ${textColorCss};
  ${bodyRegularPrimaryCss};
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
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

export {
  buttonCss,
  squareButtonCss,
  squareSmallButtonPadding,
  outlinedButtonCss,
  squareExtraLargeButtonPadding,
  squareMediumButtonPadding,
  squareLargeButtonPadding,
};

export * from "./scaleTransition";
