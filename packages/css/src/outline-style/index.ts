import { css } from "styled-components";

const outlineNone = css`
  outline: 2px solid transparent;
  outline-offset: 2px;
`;
const outline = css`
  outline-style: solid;
`;

const outlineDashed = css`
  outline-style: dashed;
`;

const outlineDotted = css`
  outline-style: dotted;
`;

const outlineDouble = css`
  outline-style: double;
`;

const outlineHidden = css`
  outline-style: hidden;
`;

export {
  outline,
  outlineDashed,
  outlineDotted,
  outlineDouble,
  outlineHidden,
  outlineNone,
};
