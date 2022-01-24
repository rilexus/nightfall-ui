import { css } from "styled-components";

const filledButtonClickAnimation = css`
  transition: background-color 200ms ease 0ms;
  &:active {
    background-color: white;
  }
`;

export { filledButtonClickAnimation };
