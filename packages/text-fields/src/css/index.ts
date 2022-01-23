import { css } from "styled-components";
import { greyColor } from "@nightfall-ui/theme/dist/src";
import { Ease } from "@nightfall-ui/ease";

const inputFocusCss = css`
  transition: border 200ms ${Ease.easeInOutCubic} 0ms, filter 200ms ease 0ms;

  filter: drop-shadow(0 1px 2px transparent) drop-shadow(0 1px 1px transparent);

  &:focus {
    border: 1px solid #2997ff;
    filter: drop-shadow(0 0px 1px #7fb3ff) drop-shadow(0 0px 1px #1c8efa)
      drop-shadow(0 0px 3px #2997ff);
  }
`;

const filledInputBackgroundColorCss = css`
  background-color: ${greyColor(8)};
`;

const inputPlaceholderCss = css`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${greyColor(6)};
    opacity: 1;
    transition: opacity 250ms;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${greyColor(6)};
    opacity: 1;
    transition: opacity 250ms;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${greyColor(6)};
    opacity: 1;
    transition: opacity 250ms;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    opacity: 1;
    color: ${greyColor(7)};
    transition: opacity 250ms;
  }
  &:focus {
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
  }
`;

const squareFilledInputBorderCss = css`
  border: none;
  border: 1px solid transparent;
`;

const outlinedInputBorderCss = css`
  border: 1px solid;
  border-color: ${greyColor(8)};
`;

export {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
  outlinedInputBorderCss,
  squareFilledInputBorderCss,
};
