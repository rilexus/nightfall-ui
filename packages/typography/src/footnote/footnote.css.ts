import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSize,
  fontWeight,
  lineHeight,
} from "@nightfall-ui/css";

const font = css`
  font-size: ${fontSize<any>("footnote")};
  line-height: ${lineHeight("footnote")};
`;

const regular = css`
  ${fontRegularCss};
`;

const bold = css`
  font-weight: ${fontWeight<any>("semiBold")};
`;

const footnoteRegularPrimaryCss = css`
  ${font};
  ${regular};
  color: ${color("footnote.primary")};
`;

const footnoteRegularSecondaryCss = css`
  ${font};
  ${regular};
  color: ${color("footnote.secondary")};
`;

const footnoteRegularTertiaryCss = css`
  ${font};

  ${regular};
  color: ${color("footnote.tertiary")};
`;

const footnoteRegularQuaternaryCss = css`
  ${font};
  ${regular};
  color: ${color("footnote.quaternary")};
`;

const footnoteBoldPrimaryCss = css`
  ${bold};
  ${font};
  color: ${color("footnote.primary")};
`;

const footnoteBoldSecondaryCss = css`
  ${bold};
  ${font};
  color: ${color("footnote.secondary")};
`;

const footnoteBoldTertiaryCss = css`
  ${bold};
  ${font};
  color: ${color("footnote.tertiary")};
`;

const footnoteBoldQuaternaryCss = css`
  ${bold};
  ${font};
  color: ${color("footnote.quaternary")};
`;

export {
  footnoteRegularPrimaryCss,
  footnoteRegularSecondaryCss,
  footnoteRegularTertiaryCss,
  footnoteRegularQuaternaryCss,
  // bold
  footnoteBoldPrimaryCss,
  footnoteBoldSecondaryCss,
  footnoteBoldTertiaryCss,
  footnoteBoldQuaternaryCss,
};
