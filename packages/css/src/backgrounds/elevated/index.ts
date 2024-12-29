import { css } from "styled-components";
import { color } from "../../getters";

const primaryElevatedBackgroundCss = css`
  // The color for the main background of your interface.
  background-color: ${color("background.elevated.primary")};
`;
const secondaryElevatedBackgroundCss = css`
  // The color for content layered on top of the main background.
  background-color: ${color("background.elevated.secondary")};
`;
const tertiaryElevatedBBackgroundCss = css`
  // The color for content layered on top of secondary backgrounds.
  background-color: ${color("background.elevated.tertiary")};
`;
export {
  primaryElevatedBackgroundCss,
  secondaryElevatedBackgroundCss,
  tertiaryElevatedBBackgroundCss,
};
