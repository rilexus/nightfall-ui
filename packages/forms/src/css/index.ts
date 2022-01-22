import { css } from "styled-components";
import { greyColor } from "@nightfall-ui/theme/dist/src";

const inputFocusCss = css`
  // border: 1px solid;
  // border-color: transparent;
  // transition: border-color 200ms ease 0ms;
  // &:focus {
  //   border-color: ${greyColor(6)};
  // }
`;

const filledInputBackgroundColorCss = css`
  background-color: ${greyColor(7)};
`;

const inputPlaceholderCss = css`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    opacity: 0;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    opacity: 0;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    opacity: 0;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    opacity: 0;
  }
`;

export { filledInputBackgroundColorCss, inputFocusCss, inputPlaceholderCss };
