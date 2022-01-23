import { MarginTheme } from "./margin";
import { PaddingTheme } from "./padding";

type Mode = "dark" | "light" | "main";

interface ThemedColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface Theme {
  margin: MarginTheme;
  padding: PaddingTheme;
  media: {
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
    mode: Mode;
    primary: ThemedColor;
    secondary: ThemedColor;
    error: ThemedColor;
    warning: ThemedColor;
    info: ThemedColor;
    success: ThemedColor;
    text: ThemedColor;
    background: ThemedColor;
    grey: string[];
  };
}

export type { Theme, Mode };
