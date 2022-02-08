import { css } from "styled-components";
import { color, textColorCss } from "@nightfall-ui/css";
import { buttonCss, buttonScaleTransition } from "../../css";

const filledButtonBackgroundColorCss = css`
  background-color: ${color("fill.secondary")};
`;
const filledButtonColorCss = css`
  ${textColorCss};
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
  ${buttonScaleTransition};
  ${filledButtonClickAnimation}
`;

export {
  filledButtonColorCss,
  filledButtonClickAnimation,
  filledButtonBackgroundColorCss,
  filledButtonCss,
};
