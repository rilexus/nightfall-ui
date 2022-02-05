import { css } from "styled-components";
import { GenericTheme, Theme } from "../Theme.type";

function fontWeight<T extends GenericTheme = Theme>(
  name: keyof (Theme["fontWeight"] & T["fontWeight"])
) {
  // TODO: type theme here
  return ({ theme }: any) => {
    return theme.fontWeight[name];
  };
}

const fontSemiBoldCss = css`
  font-weight: ${fontWeight("semiBold")};
`;

const fontBoldCss = css`
  font-weight: ${fontWeight("bold")};
`;

const fontExtraBoldCss = css`
  font-weight: ${fontWeight("extraBold")};
`;

export { fontBoldCss, fontSemiBoldCss, fontExtraBoldCss, fontWeight };
