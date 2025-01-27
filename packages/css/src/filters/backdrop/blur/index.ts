import { css } from "styled-components";
import { Theme } from "../../../Theme.type";
import { access } from "../../../utils";

export const backdrop = (name: keyof Theme["backdrop"]): any => {
  return ({ theme }: { theme: Theme }): any => {
    return access(name, theme.backdrop);
  };
};

export const backdropBlurNone = css`
  backdrop-filter: ;
`;

export const backdropBlur = css`
  backdrop-filter: blur(${backdrop("md")});
`;

export const backdropBlurSM = css`
  backdrop-filter: blur(${backdrop("sm")});
`;

export const backdropBlurMD = css`
  backdrop-filter: blur(${backdrop("md")});
`;

export const backdropBlurLG = css`
  backdrop-filter: blur(${backdrop("lg")});
`;

export const backdropBlurXL = css`
  backdrop-filter: blur(${backdrop("xl")});
`;

export const backdropBlur2XL = css`
  backdrop-filter: blur(${backdrop("xxl")});
`;

export const backdropBlur3XL = css`
  backdrop-filter: blur(${backdrop("xxxl")});
`;
