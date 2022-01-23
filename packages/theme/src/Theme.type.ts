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
    small: string;
    medium: string;
    large: string;
    tablet: string;
    laptop: string;
    desktop: string;
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
