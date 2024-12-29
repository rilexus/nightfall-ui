import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSemiBoldCss,
  fontSize,
  lineHeight,
} from "@nightfall-ui/css";

const font = css`
  font-size: ${fontSize<any>("subHeadline")};
  line-height: ${lineHeight("largeTitle")};
`;

const regular = css`
  ${fontRegularCss};
  ${font}
`;

const semiBold = css`
  ${fontSemiBoldCss};
  ${font};
`;

const primaryColor = css`
  color: ${color("subHeadline.primary")};
`;

const secondaryColor = css`
  color: ${color("subHeadline.secondary")};
`;

const tertiaryColor = css`
  color: ${color("subHeadline.tertiary")};
`;

const quaternaryColor = css`
  color: ${color("subHeadline.quaternary")};
`;
const subHeadlineRegularPrimaryCss = css`
  ${regular};
  ${primaryColor};
`;

const subHeadlineRegularSecondaryCss = css`
  ${regular};
  ${secondaryColor};
`;

const subHeadlineRegularTertiaryCss = css`
  ${regular};
  ${tertiaryColor};
`;

const subHeadlineRegularQuaternaryCss = css`
  ${regular};
  ${quaternaryColor};
`;

const subHeadlineBoldPrimaryCss = css`
  ${semiBold};
  ${primaryColor};
`;

const subHeadlineBoldSecondaryCss = css`
  ${semiBold};
  ${secondaryColor};
`;

const subHeadlineBoldTertiaryCss = css`
  ${semiBold};
  ${tertiaryColor};
`;

const subHeadlineBoldQuaternaryCss = css`
  ${semiBold};
  ${quaternaryColor};
`;

export {
  subHeadlineRegularPrimaryCss,
  subHeadlineRegularSecondaryCss,
  subHeadlineRegularTertiaryCss,
  subHeadlineRegularQuaternaryCss,
  // bold
  subHeadlineBoldPrimaryCss,
  subHeadlineBoldSecondaryCss,
  subHeadlineBoldTertiaryCss,
  subHeadlineBoldQuaternaryCss,
};
