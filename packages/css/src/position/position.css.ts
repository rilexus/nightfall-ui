import { css } from "styled-components";

const relative = css`
  position: relative;
`;

const absolute = css`
  position: absolute;
`;

const sticky = css`
  position: sticky;
  position: -webkit-sticky;
`;

const fixed = css`
  position: fixed;
  position: -ms-device-fixed;
`;

export { fixed, absolute, sticky, relative };
