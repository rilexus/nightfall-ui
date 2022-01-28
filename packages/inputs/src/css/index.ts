import { css, keyframes } from "styled-components";
import {
  color,
  m0,
  px75,
  px87,
  py37,
  py50,
  py87,
  roundedFull,
} from "@nightfall-ui/css";
import { Ease } from "@nightfall-ui/ease";
import { regularNormalCss } from "@nightfall-ui/typography";

const shine = keyframes`
  from {
    filter: drop-shadow(0 0px 1px #7fb3ff) drop-shadow(0 0px 1px #1c8efa) drop-shadow(0 0px 7px #2997ff);
  }

  to {
    filter: drop-shadow(0 0px 1px #7fb3ff) drop-shadow(0 0px 1px #1c8efa)
    drop-shadow(0 0px 3px #2997ff);
  }
`;

const inputFocusCss = css`
  transition: border 200ms ${Ease.easeInOutCubic} 0ms, filter 200ms ease 0ms;

  filter: drop-shadow(0 0px 1px transparent) drop-shadow(0 0px 1px #transparent)
    drop-shadow(0 0px 3px transparent);

  &:focus {
    border: 1px solid #2997ff;
    filter: drop-shadow(0 0px 1px #7fb3ff) drop-shadow(0 0px 1px #1c8efa)
      drop-shadow(0 0px 3px #2997ff);
    animation: 200ms ${shine} ease;
  }
`;

const inputFont = css`
  ${regularNormalCss};
`;

const inputOutline = css`
  outline: none;
`;

const smallInputPadding = css`
  ${px75};
  ${py37};
`;

const mediumInputPadding = css`
  ${py50};
  ${px75};
`;

const filledInputBackgroundColorCss = css`
  background-color: ${color("gray6")};
`;

const filledInputBorderCss = css`
  border: none;
  border: 1px solid transparent;
`;

const largeInputPaddingCss = css`
  ${py87};
  ${px87};
`;

const inputPlaceholderCss = css`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${color("gray5")};
    opacity: 1;
    transition: opacity 250ms;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${color("gray5")};
    opacity: 1;
    transition: opacity 250ms;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${color("gray5")};
    opacity: 1;
    transition: opacity 250ms;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    opacity: 1;
    color: ${color("gray5")};
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

const outlinedInputBorderCss = css`
  border: 1px solid;
  border-color: ${color("gray5")};
`;

const inputCss = css`
  ${inputFont};
  ${inputFocusCss};
  ${inputOutline};
  ${m0};
  ${inputPlaceholderCss};
`;

const roundedFilledInputCss = css`
  ${inputCss};
  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};
  ${roundedFull};
`;

const outlinedInputBackgroundCss = css`
  background: transparent;
`;

const outlineInputCss = css`
  ${outlinedInputBorderCss};
  ${outlinedInputBackgroundCss}
`;

export {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
  outlinedInputBorderCss,
  filledInputBorderCss,
  smallInputPadding,
  inputFont,
  inputOutline,
  mediumInputPadding,
  roundedFilledInputCss,
  largeInputPaddingCss,
  inputCss,
  outlinedInputBackgroundCss,
  outlineInputCss,
};
