import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSize,
  fontWeight,
  lineHeight,
} from "@nightfall-ui/css";

const font = css`
  font-size: ${fontSize<any>("caption1")};
  line-height: ${lineHeight("caption1")};
`;

const regular = css`
  ${fontRegularCss};
`;

const bold = css`
  font-weight: ${fontWeight<any>("medium")};
`;

const caption1RegularPrimaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption1.primary")};
`;

const caption1RegularSecondaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption1.secondary")};
`;

const caption1RegularTertiaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption1.tertiary")};
`;

const caption1RegularQuaternaryCss = css`
  ${font};
  ${regular};
  color: ${color("caption1.quaternary")};
`;

const caption1BoldPrimaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption1.primary")};
`;

const caption1BoldSecondaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption1.secondary")};
`;

const caption1BoldTertiaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption1.tertiary")};
`;

const caption1BoldQuaternaryCss = css`
  ${font};
  ${bold};
  color: ${color("caption1.quaternary")};
`;

export {
  caption1RegularPrimaryCss,
  caption1RegularSecondaryCss,
  caption1RegularTertiaryCss,
  caption1RegularQuaternaryCss,
  // bold
  caption1BoldPrimaryCss,
  caption1BoldSecondaryCss,
  caption1BoldTertiaryCss,
  caption1BoldQuaternaryCss,
};
