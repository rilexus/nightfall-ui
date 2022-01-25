import { css } from "styled-components";
import { greyColor } from "@nightfall-ui/theme";

const filledButtonBackgroundColorCss = css`
  background-color: ${greyColor(8)};
`;
const filledButtonColorCss = css`
  color: ${greyColor(3)};
`;
const filledButtonScaleTransition = css`
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
  ${filledButtonBackgroundColorCss};
  ${filledButtonColorCss};
  ${filledButtonScaleTransition};
  ${filledButtonClickAnimation}
`;

export {
  filledButtonColorCss,
  filledButtonClickAnimation,
  filledButtonBackgroundColorCss,
  filledButtonScaleTransition,
  filledButtonCss,
};
