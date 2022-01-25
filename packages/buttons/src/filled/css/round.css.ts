import { css } from "styled-components";
import { p12, p75, roundedFull } from "@nightfall-ui/theme/dist/src";
import { buttonCss } from "../../css";

const roundButtonBorderRadiusCss = css`
  ${roundedFull}
`;

const roundedButtonCss = css`
  ${buttonCss};
  ${roundButtonBorderRadiusCss};
`;

export { roundButtonBorderRadiusCss, roundedButtonCss };
