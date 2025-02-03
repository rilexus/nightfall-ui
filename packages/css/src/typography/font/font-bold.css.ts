import { css } from "styled-components";
import { Theme } from "@nightfall-ui/themes";

function fontWeight<T extends Theme>(
  name: keyof (Theme["fontWeight"] & T["fontWeight"])
) {
  // TODO: type theme here
  return ({ theme }: any) => {
    return theme.fontWeight[name];
  };
}

const fontMediumCss = css`
  font-weight: ${fontWeight("medium")};
`;

const fontSemiBoldCss = css`
  font-weight: ${fontWeight("semiBold")};
`;

const fontBoldCss = css`
  font-weight: ${fontWeight("bold")};
`;

const fontExtraBoldCss = css`
  font-weight: ${fontWeight("extraBold")};
`;

export {
  fontBoldCss,
  fontSemiBoldCss,
  fontExtraBoldCss,
  fontWeight,
  fontMediumCss,
};
