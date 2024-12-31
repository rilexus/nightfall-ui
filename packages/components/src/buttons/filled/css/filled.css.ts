import { css } from "styled-components";
import { color } from "@nightfall-ui/css";
import { buttonCss } from "../../css";

const filledButtonBackgroundColorCss = css`
  background-color: ${color("fill.secondary")};
`;

const filledButtonClickAnimation = css`
  transition: background-color 200ms ease 0ms;

  &:active {
    background-color: ${color("gray.1")};
  }
`;

const filledButtonCss = css`
  ${buttonCss};
  ${filledButtonBackgroundColorCss};
  ${filledButtonClickAnimation}
`;

export {
  filledButtonClickAnimation,
  filledButtonBackgroundColorCss,
  filledButtonCss,
};
