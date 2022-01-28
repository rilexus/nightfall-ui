import { css } from "styled-components";
import { textColor as tColor } from "../getters";

const textColorCss = css`
  color: ${tColor("DEFAULT")};
`;

export { textColorCss };

export * from "./gray.css";
