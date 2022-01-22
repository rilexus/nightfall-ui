import { css } from "styled-components";

const scaleTransitionCss = css`
  transition: transform 200ms ease 0ms, opacity 200ms ease 0ms;
  transform: scale(100%);
  opacity: 1;
  &:hover {
    opacity: 0.8;
    transform: scale(93%);
  }
  &:active {
    opacity: 0.7;
    transform: scale(85%);
  }
`;
export { scaleTransitionCss };
