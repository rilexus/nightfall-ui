import { css } from "styled-components";
import { greyColor, themedTextColor } from "@nightfall-ui/theme";

const filledBackgroundColor = css`
  background-color: ${greyColor(8)};
`;

const buttonCss = css`
  ${themedTextColor};
  border: none;
  outline: none;
`;

export { filledBackgroundColor, buttonCss };

export * from "./scaleTransition";
