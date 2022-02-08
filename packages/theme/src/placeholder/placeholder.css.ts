import { css } from "styled-components";
import { color } from "@nightfall-ui/css";
import { bodyRegularSecondaryCss } from "../typography";

const placeholderCss = css`
  ${bodyRegularSecondaryCss};
  color: ${color("placeholderText")};
`;

export { placeholderCss };
