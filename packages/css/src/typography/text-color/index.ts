import { css } from "styled-components";
import { textColor } from "../../getters";

const textColorCss = css`
  color: ${textColor("DEFAULT")};
`;

export { textColorCss };

export * from "./gray.css";
