import { css } from "styled-components";
import { Theme } from "@nightfall-ui/themes";

function fontSize<T extends Theme>(
  name: keyof (Theme["fontSize"] & T["fontSize"])
) {
  // TODO: type theme here
  return ({ theme }: any): any => {
    return theme.fontSize[name];
  };
}

const textXSCss = css`
  font-size: ${fontSize("xs")};
  line-height: 1rem;
`;

const textSMCss = css`
  font-size: ${fontSize("sm")};
  line-height: 1.25rem;
`;

const textCss = css`
  font-size: ${fontSize("DEFAULT")};
  line-height: 1.5rem;
`;

const textLGCss = css`
  font-size: ${fontSize("lg")};
  line-height: 1.75rem;
`;

const textXLCss = css`
  font-size: ${fontSize("xl")};
  line-height: 1.75rem;
`;

const text2XLCss = css`
  font-size: ${fontSize("2xl")};
  line-height: 2rem;
`;

const text3XLCss = css`
  font-size: ${fontSize("3xl")};
  line-height: 2.25rem;
`;

const text4XLCss = css`
  font-size: ${fontSize("4xl")};
  line-height: 1;
`;

const text5XLCss = css`
  font-size: ${fontSize("5xl")};
  line-height: 1;
`;

const text6XLCss = css`
  font-size: ${fontSize("6xl")};
  line-height: 1;
`;

const text7XLCss = css`
  font-size: ${fontSize("7xl")};
  line-height: 1;
`;

const text8XLCss = css`
  font-size: ${fontSize("8xl")};
  line-height: 1;
`;

const text9XLCss = css`
  font-size: ${fontSize("9xl")};
  line-height: 1;
`;

const textElastic = (
  minFontSizeInPixel: number,
  maxFontSizeInPixel: number,
  minWindowWidth: number,
  maxWindowWidth: number
) => {
  // TODO: give a better name to this function
  return css`
    font-size: calc(
      ${minFontSizeInPixel} *
        (
          1px -
            clamp(
              0px,
              (100vw - ${minWindowWidth}px) /
                (${maxWindowWidth} - ${minWindowWidth}),
              1px
            )
        ) + ${maxFontSizeInPixel} *
        clamp(
          0px,
          (100vw - ${minWindowWidth}px) /
            (${maxWindowWidth} - ${minWindowWidth}),
          1px
        )
    );
  `;
};

export {
  textXSCss,
  textSMCss,
  textCss,
  textLGCss,
  textXLCss,
  text2XLCss,
  text3XLCss,
  text4XLCss,
  text5XLCss,
  text6XLCss,
  text7XLCss,
  text8XLCss,
  text9XLCss,
  fontSize,
  textElastic,
};
