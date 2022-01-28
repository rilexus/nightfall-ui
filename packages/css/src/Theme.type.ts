import { MarginTheme } from "./margin";
import { PaddingTheme } from "./padding";

interface Theme {
  margin: MarginTheme;
  padding: PaddingTheme;
  mode?: string;
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
