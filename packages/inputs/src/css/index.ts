import { css, keyframes } from "styled-components";
import {
  color,
  m12,
  px75,
  px87,
  py37,
  py50,
  py87,
  roundedFull,
} from "@nightfall-ui/css";
import { Ease } from "@nightfall-ui/ease";
import { regularNormalCss } from "@nightfall-ui/css";
import { placeholderCss, regularPlatter } from "@nightfall-ui/theme";

const shine = keyframes`
  from {
    box-shadow: 0 0 2px #7fb3ff, 0 0 5px #1c8efa, 0 0 13px #2997ff;
  }

  to {
    box-shadow: 0 0 1px #7fb3ff, 0 0 3px #1c8efa, 0 0 4px #2997ff;
  }
`;

const inputFocusCss = css`
  transition: border 200ms ${Ease.easeInOutCubic} 0ms;

  &:focus {
    border: 1px solid #007efc;
    box-shadow: 0 0 3px #7fb3ff, 0 0 5px #1c8efa, 0 0 6px #2997ff;
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
  background-color: ${color("fill.quaternary")};
`;

const filledInputBorderCss = css`
  border: 1px solid transparent;
`;

const largeInputPaddingCss = css`
  ${py87};
  ${px87};
`;

const inputPlaceholderCss = css`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    ${placeholderCss};
    opacity: 1;
    transition: opacity 200ms;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    ${placeholderCss};
    opacity: 1;
    transition: opacity 250ms;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    ${placeholderCss};
    opacity: 1;
    transition: opacity 200ms ease;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    opacity: 1;
    ${placeholderCss};
    transition: opacity 250ms;
  }

  &:focus {
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      opacity: 0.3;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      opacity: 0.3;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      opacity: 0.3;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      opacity: 0.3;
    }
  }
`;

const outlinedInputBorderCss = css`
  border: 1px solid;
  border-color: ${color("separator")};
`;

const inputCss = css`
  ${inputFont};
  ${inputFocusCss};
  ${inputOutline};
  ${m12};
  color: white;
  caret-color: ${color("blue.1")};
  ${inputPlaceholderCss};
`;

const roundedFilledInputCss = css`
  ${inputCss};
  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};
  ${roundedFull};
`;

const outlinedInputBackgroundCss = css`
  // background: transparent;
  ${regularPlatter};
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
