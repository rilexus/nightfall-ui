import { css } from "styled-components";

const selectNoneCss = css`
  user-select: none;
`;
const selectTextCss = css`
  user-select: text;
`;

const selectAllCss = css`
  user-select: all;
`;
const selectAutoCss = css`
  user-select: auto;
`;
export { selectAllCss, selectAutoCss, selectNoneCss, selectTextCss };
