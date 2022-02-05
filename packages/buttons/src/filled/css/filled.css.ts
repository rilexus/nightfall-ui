import { css } from "styled-components";
import { color, textColorCss } from "@nightfall-ui/css";
import { buttonCss } from "../../css";

const filledButtonBackgroundColorCss = css`
  background-color: ${color("fill.secondary")};
`;
const filledButtonColorCss = css`
  ${textColorCss};
`;
const buttonScaleTransition = css`
  transition: transform 200ms ease 0ms, opacity 200ms ease 0ms;
  transform: scale(100%);
  opacity: 1;
  &:hover {
    opacity: 0.8;
    transform: scale(97%);
  }
  &:active {
    opacity: 0.7;
    transform: scale(95%);
  }
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
  ${filledButtonColorCss};
  ${buttonScaleTransition};
  ${filledButtonClickAnimation}
`;

export {
  buttonScaleTransition,
  filledButtonColorCss,
  filledButtonClickAnimation,
  filledButtonBackgroundColorCss,
  filledButtonCss,
};
