import { css } from "styled-components";
import { color } from "@nightfall-ui/css";

const labelCss = css`
  color: ${color("label.primary")};
`;
const secondaryLabelCss = css`
  color: ${color("label.secondary")};
`;
const tertiaryLabelCss = css`
  color: ${color("label.tertiary")};
`;
const quaternaryLabelCss = css`
  color: ${color("label.quaternary")};
`;

export { labelCss, secondaryLabelCss, tertiaryLabelCss, quaternaryLabelCss };
