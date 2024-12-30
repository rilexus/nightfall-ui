import { css } from "styled-components";

const dropShadowSM = css`
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
`;

const dropShadow = css`
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
`;

const dropShadowMD = css`
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`;

const dropShadowLG = css`
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

const dropShadowXL = css`
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

const dropShadowXXL = css`
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
`;

const dropShadowNone = css`
  filter: drop-shadow(0 0 #0000);
`;

export {
  dropShadow,
  dropShadowMD,
  dropShadowLG,
  dropShadowNone,
  dropShadowSM,
  dropShadowXL,
  dropShadowXXL,
};
