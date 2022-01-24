import { css } from "styled-components";
import { greyColor } from "@nightfall-ui/theme";

const filledButtonClickAnimation = css`
  transition: background-color 200ms ease 0ms;

  &:active {
    background-color: ${greyColor(4)};
  }
`;

export { filledButtonClickAnimation };
