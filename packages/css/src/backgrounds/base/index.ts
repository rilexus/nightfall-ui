import { css } from "styled-components";
import { color } from "../../getters";

const primaryBaseBackgroundCss = css`
  // The color for the main background of your interface.
  background-color: ${color("background.base.primary")};
  background: ${color("background.base.primary")};
`;
const secondaryBaseBackgroundCss = css`
  // The color for content layered on top of the main background.
  background-color: ${color("background.base.secondary")};
  background: ${color("background.base.secondary")};
`;
const tertiaryBaseBackgroundCss = css`
  // The color for content layered on top of secondary backgrounds.
  background-color: ${color("background.base.tertiary")};
  background: ${color("background.base.tertiary")};
`;

export {
  primaryBaseBackgroundCss,
  secondaryBaseBackgroundCss,
  tertiaryBaseBackgroundCss,
};
