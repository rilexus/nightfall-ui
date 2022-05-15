import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSize,
  fontWeight,
  lineHeight,
} from "@nightfall-ui/css";
import { ThemeType } from "../../themes/Theme.type";

const font = css`
  font-size: ${fontSize<ThemeType>("body")};
  line-height: ${lineHeight<ThemeType>("body")};
`;

const regular = css`
  ${fontRegularCss};
`;

const bold = css`
  font-weight: ${fontWeight<ThemeType>("semiBold")};
`;

const bodyRegularPrimaryCss = css`
  ${font};
  ${regular};
  color: ${color("body.primary")};
`;

const bodyRegularSecondaryCss = css`
  ${font};
  ${regular};
  color: ${color("body.secondary")};
`;

const bodyRegularTertiaryCss = css`
  ${font};

  ${regular};
  color: ${color("body.tertiary")};
`;

const bodyRegularQuaternaryCss = css`
  ${font};
  ${regular};
  color: ${color("body.quaternary")};
`;

const bodyBoldPrimaryCss = css`
  ${bold};
  ${font};
  color: ${color("body.primary")};
`;

const bodyBoldSecondaryCss = css`
  ${bold};
  ${font};
  color: ${color("body.secondary")};
`;

const bodyBoldTertiaryCss = css`
  ${bold};
  ${font};
  color: ${color("body.tertiary")};
`;

const bodyBoldQuaternaryCss = css`
  ${bold};
  ${font};
  color: ${color("body.quaternary")};
`;

export {
  bodyRegularPrimaryCss,
  bodyRegularSecondaryCss,
  bodyRegularTertiaryCss,
  bodyRegularQuaternaryCss,
  // bold
  bodyBoldPrimaryCss,
  bodyBoldSecondaryCss,
  bodyBoldTertiaryCss,
  bodyBoldQuaternaryCss,
};
