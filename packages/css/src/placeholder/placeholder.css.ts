import { css } from "styled-components";
import { color, lineHeight } from "../getters";
import { fontRegularCss } from "../typography";
import { fontSize } from "../text";

const placeholderCss = css`
  font-size: ${fontSize<any>("body")};
  line-height: ${lineHeight("body")};
  ${fontRegularCss};
  color: ${color("placeholderText")};
`;

export { placeholderCss };
