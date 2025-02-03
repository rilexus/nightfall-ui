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
  backdrop-filter: saturate(180%);
  background-color: ${color("background.transparent.primary")};
`;

const ultraThinPlatter = css`
  ${backdropBlurSM};
  backdrop-filter: saturate(180%);
  background-color: ${color("background.transparent.primary")};
`;

const regularPlatter = css`
  ${backdropBlurLG};
  backdrop-filter: saturate(180%);
  background-color: ${color("background.transparent.primary")};
`;

const thickPlatter = css`
  ${backdropBlurXL};
  backdrop-filter: saturate(180%);
  background-color: ${color("background.transparent.primary")};
`;

export { regularPlatter, thickPlatter, ultraThinPlatter, thinPlatter };
