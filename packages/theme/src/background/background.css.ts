import { css } from "styled-components";
import { color } from "@nightfall-ui/css";

const backgroundCss = css`
  // The color for the main background of your interface.
  background-color: ${color("background")};
`;
const secondaryBackgroundCss = css`
  // The color for content layered on top of the main background.
  background-color: ${color("secondaryBackground")};
`;
const tertiaryBackgroundCss = css`
  // The color for content layered on top of secondary backgrounds.
  background-color: ${color("tertiaryBackground")};
`;

export { secondaryBackgroundCss, backgroundCss, tertiaryBackgroundCss };
