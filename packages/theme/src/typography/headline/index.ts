import { css } from "styled-components";
import {
  color,
  fontSemiBoldCss,
  fontSize,
  lineHeight,
} from "@nightfall-ui/css";
import { ThemeType } from "../../themes/Theme.type";

const font = css`
  font-size: ${fontSize<ThemeType>("headline")};
  line-height: ${lineHeight<ThemeType>("headline")};
`;

const headlineBoldPrimaryCss = css`
  ${font};
  ${fontSemiBoldCss};
  color: ${color("headline.primary")};
`;

const headlineBoldSecondaryCss = css`
  ${font};
  ${fontSemiBoldCss};
  color: ${color("headline.secondary")};
`;

const headlineBoldTertiaryCss = css`
  ${font};
  ${fontSemiBoldCss};
  color: ${color("headline.tertiary")};
`;

const headlineBoldQuaternaryCss = css`
  ${font};
  ${fontSemiBoldCss};
  color: ${color("headline.quaternary")};
`;

export {
  // bold
  headlineBoldPrimaryCss,
  headlineBoldSecondaryCss,
  headlineBoldTertiaryCss,
  headlineBoldQuaternaryCss,
};
