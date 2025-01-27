import { css } from "styled-components";
import { color } from "../getters";
import {
  backdropBlurLG,
  backdropBlurMD,
  backdropBlurSM,
  backdropBlurXL,
} from "../filters";

const thinPlatter = css`
  ${backdropBlurMD};
  background-color: ${color("background.transparent.primary")};
`;

const ultraThinPlatter = css`
  ${backdropBlurSM};
  background-color: ${color("background.transparent.primary")};
`;

const regularPlatter = css`
  ${backdropBlurLG};
  background-color: ${color("background.transparent.primary")};
`;

const thickPlatter = css`
  ${backdropBlurXL};
  background-color: ${color("background.transparent.primary")};
`;

export { regularPlatter, thickPlatter, ultraThinPlatter, thinPlatter };
