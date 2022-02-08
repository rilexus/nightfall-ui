import { css } from "styled-components";
import { roundedFull } from "@nightfall-ui/css";
import { buttonCss } from "../../css";

const roundButtonBorderRadiusCss = css`
  ${roundedFull}
`;

const roundedButtonCss = css`
  ${roundButtonBorderRadiusCss};
`;

export { roundButtonBorderRadiusCss, roundedButtonCss };
