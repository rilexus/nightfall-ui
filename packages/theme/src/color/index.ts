import { css } from "styled-components";
import { textColor } from "../getters";

const themedTextColor = css`
  color: ${textColor};
`;

export { themedTextColor };
