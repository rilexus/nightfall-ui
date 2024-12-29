import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSemiBoldCss,
  fontSize,
  lineHeight,
  regularLGCss,
} from "@nightfall-ui/css";

const title3RegularPrimaryCss = css`
  ${regularLGCss};
  color: ${color("title3.primary")};
`;

const font = css`
  line-height: ${lineHeight("title3")};
  font-size: ${fontSize<any>("title3")};
`;

const regular = css`
  ${fontRegularCss};
  ${font};
`;

const bold = css`
  ${fontSemiBoldCss};
  ${font};
`;

const title3RegularSecondaryCss = css`
  ${regular};
  color: ${color("title3.secondary")};
`;

const title3RegularTertiaryCss = css`
  ${regular};
  color: ${color("title3.tertiary")};
`;

const title3RegularQuaternaryCss = css`
  ${regular};
  color: ${color("title3.quaternary")};
`;

const title3BoldPrimaryCss = css`
  ${bold};
  color: ${color("title3.primary")};
`;

const title3BoldSecondaryCss = css`
  ${bold};
  color: ${color("title3.secondary")};
`;

const title3BoldTertiaryCss = css`
  ${bold};
  color: ${color("title3.tertiary")};
`;

const title3BoldQuaternaryCss = css`
  ${bold};
  color: ${color("title3.quaternary")};
`;

export {
  title3RegularPrimaryCss,
  title3RegularSecondaryCss,
  title3RegularTertiaryCss,
  title3RegularQuaternaryCss,
  // bold
  title3BoldPrimaryCss,
  title3BoldSecondaryCss,
  title3BoldTertiaryCss,
  title3BoldQuaternaryCss,
};
