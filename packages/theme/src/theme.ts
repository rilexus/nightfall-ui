import { marginTheme } from "./margin";
import { paddingTheme } from "./padding";
import { Theme } from "./Theme.type";

const theme: Theme = {
  margin: marginTheme,
  padding: paddingTheme,
  colors: {
    mode: "dark",
    primary: {
      light: "",
      main: "",
      dark: "",
      contrastText: "white",
    },
    secondary: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    error: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    warning: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    info: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    success: {
      light: "",
      main: "",
      dark: "",
      contrastText: "",
    },
    background: {
      light: "",
      main: "",
      dark: "black",
      contrastText: "white",
    },
    text: {
      light: "#1e1e1e",
      main: "",
      dark: "#f1f1f1",
      contrastText: "white",
    },
    grey: [
      "#efefef",
      "#dedede",
      "#ececec",
      "#d9d9d9",
      "#b9b9b9",
      "#868686",
      "#7e7e7e",
      "#4f4f4f",
      "rgb(56,56,56)",
      "#333333",
      "#1a1a1a",
      "#000000",
    ],
  },
  media: {
    small: 320,
    medium: 375,
    large: 425,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
  },
  font: {
    antialiased: "antialiased",
    italic: "italic",
    notItalic: "normal",
    family: {
      sans: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
      serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    weight: {
      // thin
      thin: 100,

      // light
      ultralight: 100,
      extralight: 200,
      light: 300,

      // normal
      normal: 400,

      // medium
      medium: 500,

      // bold
      semibold: 600,
      bold: 700,
      extrabold: 800,

      // black
      black: 900,
    },
  },
};

export { theme };
