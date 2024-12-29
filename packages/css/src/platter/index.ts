import { css } from "styled-components";
import { color } from "../getters";

const regularPlatter = css`
  backdrop-filter: blur(50px);
  background-color: ${color("materials.background.regular")};
`;

const thinPlatter = css`
  backdrop-filter: blur(50px);
  background-color: ${color("materials.background.thin")};
`;

const ultraThinPlatter = css`
  backdrop-filter: blur(50px);
  background-color: ${color("materials.background.ultraThin")};
`;

const thickPlatter = css`
  backdrop-filter: blur(50px);
  background-color: ${color("materials.background.thick")};
`;

export { regularPlatter, thickPlatter, ultraThinPlatter, thinPlatter };
