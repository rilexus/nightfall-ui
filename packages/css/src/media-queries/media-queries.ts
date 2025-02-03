import { css } from "styled-components";
import { interpolate } from "../utils";
import { Theme } from "@nightfall-ui/themes";

const media = new Proxy(
  {},
  {
    get: function (target, prop: keyof Theme["breakpoints"]) {
      return (strings: any, ...values: any) => {
        return (context: { theme: Theme }) => {
          const theme = context.theme;
          const cssString = interpolate(strings, ...values)(context);
          return css`
            @media only screen and (min-width: ${theme.breakpoints[prop]}px) {
              ${cssString};
            }
          `;
        };
      };
    },
  }
) as Record<keyof Theme["breakpoints"], (...args: any) => any>;

/*

Example:
const Center = styled.div`
  margin: auto;
  ${small`
    width: ${95}%;
  `}
  ${tablet`
    width: ${({ theme }) => 90}%;
  `}
  ${laptop`
    width: 50%;
  `};
  ${desktop`
    width: 40%;
  `}
`;
* */
// const laptop = media.laptop;
// const medium = media.medium;
// const desktop = media.desktop;
// const small = media.small;
// const tablet = media.tablet;
// const large = media.large;

const between = (min: number, max: number) => {
  return (strings: any, ...values: any) => {
    return (context: any) => {
      const cssString = interpolate(strings, ...values)(context);
      return css`
        @media only screen and (min-width: ${min}px) and (max-width: ${max}px) {
          ${cssString};
        }
      `;
    };
  };
};

const min = (value: number): any => {
  return (strings: any, ...values: any) => {
    return (context: any) => {
      const cssString = interpolate(strings, ...values)(context);
      return css`
        @media only screen and (min-width: ${value}px) {
          ${cssString};
        }
      `;
    };
  };
};

const max = (value: number): any => {
  return (strings: any, ...values: any) => {
    return (context: any) => {
      const cssString = interpolate(strings, ...values)(context);
      return css`
        @media only screen and (max-width: ${value}px) {
          ${cssString};
        }
      `;
    };
  };
};

export {
  max,
  min,
  media,
  between,
  // laptop,
  // large,
  // tablet,
  // desktop,
  // medium,
  // small,
};
