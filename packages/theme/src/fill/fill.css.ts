import { css } from "styled-components";
import { color } from "@nightfall-ui/css";

const fillCss = css`
  // An overlay fill color for thin and small shapes.
  background-color: ${color("fill.primary")};
`;
const secondaryFillCss = css`
  // An overlay fill color for medium-size shapes.
  background-color: ${color("fill.secondary")};
`;
const tertiaryFillCss = css`
  // An overlay fill color for large shapes.
  background-color: ${color("fill.tertiary")};
`;
const quaternaryFillCss = css`
  // An overlay fill color for large areas that contain complex content.
  background-color: ${color("fill.quaternary")};
`;

export { fillCss, secondaryFillCss, tertiaryFillCss, quaternaryFillCss };
