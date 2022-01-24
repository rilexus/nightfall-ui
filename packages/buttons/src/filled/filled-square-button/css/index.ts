import { css } from "styled-components";

const filledButtonClickAnimation = css`
  transition: background-color 200ms ease 0ms;

  &:active {
    background-color: #e1e1e1;
  }
`;

export { filledButtonClickAnimation };
