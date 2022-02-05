import { css } from "styled-components";
import { Theme } from "../Theme.type";

const media = new Proxy(
  {},
  {
    get: function (target, prop: keyof Theme["breakpoints"]) {
      return (...args: any) => {
        return ({ theme }: { theme: Theme }) => {
          return css`
            @media only screen and (min-width: ${theme.breakpoints[prop]}px) {
              ${args};
            }
          `;
        };
      };
    },
  }
) as Record<keyof Theme["breakpoints"], (...args: any) => any>;

const laptop = media.laptop;
const medium = media.medium;
const desktop = media.desktop;
const small = media.small;
const tablet = media.tablet;
const large = media.large;

const between = (min: number, max: number) => {
  return (...args: any) => {
    return css`
      @media only screen and (min-width: ${min}px) and (max-width: ${max}px) {
        ${args};
      }
    `;
  };
};

const min = (value: number): any => {
  return (...args: any) => {
    return css`
      @media only screen and (min-width: ${value}px) {
        ${args};
      }
    `;
  };
};

const max = (value: number): any => {
  return (...args: any) => {
    return css`
      @media only screen and (max-width: ${value}px) {
        ${args};
      }
    `;
  };
};

export {
  max,
  min,
  media,
  between,
  laptop,
  large,
  tablet,
  desktop,
  medium,
  small,
};
