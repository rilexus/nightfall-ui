import { css } from "styled-components";
import { roundedFull } from "@nightfall-ui/css";

const roundButtonBorderRadiusCss = css`
  ${roundedFull};
`;

const roundedButtonCss = css`
  ${roundButtonBorderRadiusCss};
`;

export { roundButtonBorderRadiusCss, roundedButtonCss };
