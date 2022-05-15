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
  font-size: ${fontSize<ThemeType>("caption2")};
  line-height: ${lineHeight<ThemeType>("caption2")};
`;

const regular = css`
  ${fontRegularCss};
`;

const bold = css`
  font-weight: ${fontWeight("semiBold")};
`;

const caption2RegularPrimaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption2.primary")};
`;

const caption2RegularSecondaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption2.secondary")};
`;

const caption2RegularTertiaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption2.tertiary")};
`;

const caption2RegularQuaternaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption2.quaternary")};
`;

const caption2BoldPrimaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption2.primary")};
`;

const caption2BoldSecondaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption2.secondary")};
`;

const caption2BoldTertiaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption2.tertiary")};
`;

const caption2BoldQuaternaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption2.quaternary")};
`;

export {
  caption2RegularPrimaryCss,
  caption2RegularSecondaryCss,
  caption2RegularTertiaryCss,
  caption2RegularQuaternaryCss,
  // bold
  caption2BoldPrimaryCss,
  caption2BoldSecondaryCss,
  caption2BoldTertiaryCss,
  caption2BoldQuaternaryCss,
};
