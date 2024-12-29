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
  roundedLG,
} from "@nightfall-ui/css";
import { Ease } from "@nightfall-ui/ease";
import { regularNormalCss, placeholderCss } from "@nightfall-ui/css";

const shine = keyframes`
  from {
    box-shadow: 0 0 2px #7fb3ff, 0 0 5px #1c8efa, 0 0 15px #2997ff;
  }

  to {
    box-shadow: 0 0 1px #7fb3ff, 0 0 3px #1c8efa, 0 0 4px #2997ff;
  }
`;

const errorShine = keyframes`
  from {
    box-shadow: 0 0 5px #fa4242, 0 0 7px #e51111, 0 0 15px #c52d2d;
  }

  to {
    box-shadow: 0 0 3px rgb(202 70 12), 0 0 5px #e51111, 0 0 5px rgb(197 61 34);
  }
`;

const inputError = ({ invalid }: { invalid?: boolean }) =>
  invalid
    ? css`
        transition: border 200ms ${Ease.easeInOutCubic} 0ms;

        outline: none;

        border: 1px solid #ff5c1e;
        box-shadow: 0 0 3px rgb(202 70 12), 0 0 5px #e51111,
          0 0 5px rgb(197 61 34);
        animation: 200ms ${errorShine} ease;

        &:focus-visible {
          outline: none;
          border: 1px solid #ff5c1e;
          box-shadow: 0 0 3px rgb(202 70 12), 0 0 5px #e51111,
            0 0 5px rgb(197 61 34);
          animation: 200ms ${errorShine} ease;
        }

        &:focus {
          outline: none;
          border: 1px solid #ff5c1e;
          box-shadow: 0 0 3px rgb(202 70 12), 0 0 5px #e51111,
            0 0 5px rgb(197 61 34);
          animation: 200ms ${errorShine} ease;
        }
      `
    : undefined;

const inputFocusCss = css`
  transition: border 200ms ${Ease.easeInOutCubic} 0ms;

  &:focus-visible {
    outline: none;
    border: 1px solid #007efc;
    box-shadow: 0 0 3px #7fb3ff, 0 0 5px #1c8efa, 0 0 6px #2997ff;
    animation: 200ms ${shine} ease;
  }
  &:focus {
    outline: none;
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
  background-color: ${color("fill.secondary")};
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
    ${placeholderCss};
    opacity: 1;
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
  ${inputError};
  ${inputOutline};
  ${m12};
  color: ${color("input.textColor")};
  caret-color: ${color("blue.1")};
  ${inputPlaceholderCss};
`;

const roundedFilledInputCss = css`
  ${filledInputBorderCss};
  ${filledInputBackgroundColorCss};
  ${roundedFull};
  ${inputCss};
`;

const inputBorderRadius = css`
  ${roundedLG};
`;

const outlinedInputBackgroundCss = css`
  background: transparent;
`;

const outlineInputCss = css`
  ${outlinedInputBorderCss};
  ${outlinedInputBackgroundCss}
`;

export {
  inputError,
  inputBorderRadius,
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
