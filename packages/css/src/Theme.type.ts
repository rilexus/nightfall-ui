import { MarginTheme } from "./margin";
import { PaddingTheme } from "./padding";

export interface GenericTheme {
  fontSize: {
    [name: string]: string;
  };
  lineHeight: {
    [name: string]: string;
  };
  fontWeight: {
    [name: string]: number;
  };
}

interface Theme {
  lineHeight: {
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    none: string;
    tight: string;
    snug: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
  margin: MarginTheme;
  padding: PaddingTheme;
  mode?: string;
  fontWeight: {
    ultraThin: number;
    thin: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  };
  fontSize: {
    xs: string;
    sm: string;
    DEFAULT: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
    "8xl": string;
    "9xl": string;
  };
  textColor: {
    [name: string]: any;
  };
  breakpoints: {
    small: number;
    medium: number;
    large: number;
    tablet: number;
    laptop: number;
    desktop: number;
  };
  font: {
    antialiased: string;
    italic: string;
    notItalic: string;
    family: {
      sans: string;
      serif: string;
      mono: string;
    };
    weight: {
      [key: string]: number;
    };
  };
  colors: {
    [name: string]: any;
  };
}

export type { Theme };
