import { css } from "styled-components";
import {
  color,
  fontBoldCss,
  fontRegularCss,
  fontSize,
  lineHeight,
} from "@nightfall-ui/css";
import { ThemeType } from "../../themes/Theme.type";

const font = css`
  line-height: ${lineHeight<ThemeType>("title1")};
  font-size: ${fontSize<ThemeType>("title1")};
`;

const regular = css`
  ${font};
  ${fontRegularCss};
`;

const bold = css`
  ${font};
  ${fontBoldCss};
`;

const title1RegularPrimaryCss = css`
  ${regular};
  color: ${color("title1.primary")};
`;

const title1RegularSecondaryCss = css`
  ${regular};
  color: ${color("title1.secondary")};
`;

const title1RegularTertiaryCss = css`
  ${regular};
  color: ${color("title1.tertiary")};
`;

const title1RegularQuaternaryCss = css`
  ${regular};
  color: ${color("title1.quaternary")};
`;

const title1BoldPrimaryCss = css`
  ${bold};
  color: ${color("title1.primary")};
`;

const title1BoldSecondaryCss = css`
  ${bold};
  color: ${color("title1.secondary")};
`;

const title1BoldTertiaryCss = css`
  ${bold};
  color: ${color("title1.tertiary")};
`;

const title1BoldQuaternaryCss = css`
  ${bold};
  color: ${color("title1.quaternary")};
`;

export {
  title1RegularPrimaryCss,
  title1RegularSecondaryCss,
  title1RegularTertiaryCss,
  title1RegularQuaternaryCss,
  // bold
  title1BoldPrimaryCss,
  title1BoldSecondaryCss,
  title1BoldTertiaryCss,
  title1BoldQuaternaryCss,
};
