import { css } from "styled-components";
import {
  color,
  fontBoldCss,
  fontRegularCss,
  fontSize,
  lineHeight,
} from "@nightfall-ui/css";

const font = css`
  font-size: ${fontSize<any>("largeTitle")};
  line-height: ${lineHeight("largeTitle")};
`;

const bold = css`
  ${font};
  ${fontBoldCss};
`;

const regular = css`
  ${font};
  ${fontRegularCss};
`;

const largeTitleRegularPrimaryCss = css`
  ${regular};
  color: ${color("largeTitle.primary")};
`;

const largeTitleRegularSecondaryCss = css`
  ${regular};
  color: ${color("largeTitle.secondary")};
`;

const largeTitleRegularTertiaryCss = css`
  ${regular};
  color: ${color("largeTitle.tertiary")};
`;

const largeTitleRegularQuaternaryCss = css`
  ${regular};
  color: ${color("largeTitle.quaternary")};
`;

const largeTitleBoldPrimaryCss = css`
  ${bold};
  color: ${color("largeTitle.primary")};
`;

const largeTitleBoldSecondaryCss = css`
  ${bold};
  color: ${color("largeTitle.secondary")};
`;

const largeTitleBoldTertiaryCss = css`
  ${bold};
  color: ${color("largeTitle.tertiary")};
`;

const largeTitleBoldQuaternaryCss = css`
  ${bold};
  color: ${color("largeTitle.quaternary")};
`;

export {
  largeTitleRegularPrimaryCss,
  largeTitleRegularSecondaryCss,
  largeTitleRegularTertiaryCss,
  largeTitleRegularQuaternaryCss,
  // bold
  largeTitleBoldPrimaryCss,
  largeTitleBoldSecondaryCss,
  largeTitleBoldTertiaryCss,
  largeTitleBoldQuaternaryCss,
};
