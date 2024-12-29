import { css } from "styled-components";
import {
  color,
  fontBoldCss,
  fontRegularCss,
  fontSize,
  lineHeight,
} from "@nightfall-ui/css";

const font = css`
  line-height: ${lineHeight("title2")};
  font-size: ${fontSize<any>("title2")};
`;

const regular = css`
  ${font};
  ${fontRegularCss};
`;

const bold = css`
  ${font};
  ${fontBoldCss};
`;

const title2RegularPrimaryCss = css`
  ${regular};
  color: ${color("title2.primary")};
`;

const title2RegularSecondaryCss = css`
  ${regular};
  color: ${color("title2.secondary")};
`;

const title2RegularTertiaryCss = css`
  ${regular};
  color: ${color("title2.tertiary")};
`;

const title2RegularQuaternaryCss = css`
  ${regular};
  color: ${color("title2.quaternary")};
`;

const title2BoldPrimaryCss = css`
  ${bold};
  color: ${color("title2.primary")};
`;

const title2BoldSecondaryCss = css`
  ${bold};
  color: ${color("title2.secondary")};
`;

const title2BoldTertiaryCss = css`
  ${bold};
  color: ${color("title2.tertiary")};
`;

const title2BoldQuaternaryCss = css`
  ${bold};
  color: ${color("title2.quaternary")};
`;

export {
  title2RegularPrimaryCss,
  title2RegularSecondaryCss,
  title2RegularTertiaryCss,
  title2RegularQuaternaryCss,
  // bold
  title2BoldPrimaryCss,
  title2BoldSecondaryCss,
  title2BoldTertiaryCss,
  title2BoldQuaternaryCss,
};
