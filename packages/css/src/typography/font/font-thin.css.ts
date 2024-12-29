import { css } from "styled-components";
import { fontWeight } from "./font-bold.css";

const fontUltraThinCss = css`
  font-weight: ${fontWeight("ultraThin")};
`;

const fontThinCss = css`
  font-weight: ${fontWeight("thin")};
`;

export { fontThinCss, fontUltraThinCss };
