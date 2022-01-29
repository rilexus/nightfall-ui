import { css } from "styled-components";
import { color } from "@nightfall-ui/css";

const labelCss = css`
  color: ${color("label")};
`;
const secondaryLabelCss = css`
  color: ${color("secondaryLabel")};
`;
const tertiaryLabelCss = css`
  color: ${color("tertiaryLabel")};
`;
const quaternaryLabelCss = css`
  color: ${color("quaternaryLabel")};
`;

export { labelCss, secondaryLabelCss, tertiaryLabelCss, quaternaryLabelCss };
