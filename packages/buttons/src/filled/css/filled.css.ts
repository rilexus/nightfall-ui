import { css } from "styled-components";
import { greyColor } from "@nightfall-ui/theme";
import { buttonCss } from "../../css";

const filledButtonBackgroundColorCss = css`
  background-color: ${greyColor(8)};
`;
const filledButtonColorCss = css`
  color: ${greyColor(3)};
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
    transform: scale(92%);
  }
`;

const filledButtonClickAnimation = css`
  transition: background-color 200ms ease 0ms;

  &:active {
    background-color: ${greyColor(2)};
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
