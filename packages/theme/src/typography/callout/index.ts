import { css } from "styled-components";
import {
  color,
  fontRegularCss,
  fontSize,
  fontWeight,
  lineHeight,
} from "@nightfall-ui/css";
import { DarkTheme } from "../../themes/dark.theme";

const font = css`
  font-size: ${fontSize<DarkTheme>("callout")};
  line-height: ${lineHeight<DarkTheme>("callout")};
`;

const regular = css`
  ${fontRegularCss};
`;

const bold = css`
  font-weight: ${fontWeight<DarkTheme>("semiBold")};
`;

const calloutRegularPrimaryCss = css`
  ${font};
  ${regular};
  color: ${color("callout.primary")};
`;

const calloutRegularSecondaryCss = css`
  ${font};
  ${regular};
  color: ${color("callout.secondary")};
`;

const calloutRegularTertiaryCss = css`
  ${font};

  ${regular};
  color: ${color("callout.tertiary")};
`;

const calloutRegularQuaternaryCss = css`
  ${font};
  ${regular};
  color: ${color("callout.quaternary")};
`;

const calloutBoldPrimaryCss = css`
  ${bold};
  ${font};
  color: ${color("callout.primary")};
`;

const calloutBoldSecondaryCss = css`
  ${bold};
  ${font};
  color: ${color("callout.secondary")};
`;

const calloutBoldTertiaryCss = css`
  ${bold};
  ${font};
  color: ${color("callout.tertiary")};
`;

const calloutBoldQuaternaryCss = css`
  ${bold};
  ${font};
  color: ${color("callout.quaternary")};
`;

export {
  calloutRegularPrimaryCss,
  calloutRegularSecondaryCss,
  calloutRegularTertiaryCss,
  calloutRegularQuaternaryCss,
  // bold
  calloutBoldPrimaryCss,
  calloutBoldSecondaryCss,
  calloutBoldTertiaryCss,
  calloutBoldQuaternaryCss,
};
