import { css } from "styled-components";

const fontSans = css`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const fontSerif = css`
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
`;

const fontMono = css`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
`;

export { fontMono, fontSans, fontSerif };
