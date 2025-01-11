import { marginTheme } from "./spacing";
import { paddingTheme } from "./spacing";
import { Theme } from "./Theme.type";

const theme: Theme = {
  margin: marginTheme,
  padding: paddingTheme,
  fontWeight: {
    ultraThin: 100,
    thin: 200,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 900,
  },
  lineHeight: {
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    DEFAULT: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  textColor: {
    DEFAULT: "black",
    white: "white",
    black: "black",
    gray: {
      50: "rgb(249 250 251)",
      100: "rgb(243 244 246)",
      200: "rgb(229 231 235)",
      300: "rgb(209 213 219)",
      400: "rgb(156 163 175)",
      500: "rgb(107 114 128)",
      600: "rgb(75 85 99)",
      700: "rgb(55 65 81)",
      800: "rgb(31 41 55)",
      900: "rgb(17 24 39)",
    },
  },
  colors: {
    gray: {
      50: "rgb(249 250 251)",
      100: "rgb(243 244 246)",
      200: "rgb(229 231 235)",
      300: "rgb(209 213 219)",
      400: "rgb(156 163 175)",
      500: "rgb(107 114 128)",
      600: "rgb(75 85 99)",
      700: "rgb(55 65 81)",
      800: "rgb(31 41 55)",
      900: "rgb(17 24 39)",
    },
    red: {
      50: "rgb(254 242 242)",
      100: "rgb(254 226 226)",
      200: "rgb(254 202 202)",
      300: "rgb(252 165 165)",
      400: "rgb(248 113 113)",
      500: "rgb(239 68 68)",
      600: "rgb(220 38 38)",
      700: "rgb(185 28 28)",
      800: "rgb(153 27 27)",
      900: "rgb(127 29 29)",
    },
    orange: {
      50: "rgb(255 247 237)",
      100: "rgb(255 237 213)",
      200: "rgb(254 215 170)",
      300: "rgb(253 186 116)",
      400: "rgb(251 146 60)",
      500: "rgb(249 115 22)",
      600: "rgb(234 88 12)",
      700: "rgb(194 65 12)",
      800: "rgb(154 52 18)",
      900: "rgb(124 45 18)",
    },
    yellow: {
      50: "rgb(254 252 232)",
      100: "rgb(254 249 195)",
      200: "rgb(254 240 138)",
      300: "rgb(253 224 71)",
      400: "rgb(250 204 21)",
      500: "rgb(234 179 8)",
      600: "rgb(202 138 4)",
      700: "rgb(161 98 7)",
      800: "rgb(133 77 14)",
      900: "rgb(113 63 18)",
    },
    green: {
      50: "rgb(240 253 244)",
      100: "rgb(220 252 231)",
      200: "rgb(187 247 208)",
      300: "rgb(134 239 172)",
      400: "rgb(74 222 128)",
      500: "rgb(34 197 94)",
      600: "rgb(22 163 74)",
      700: "rgb(21 128 61)",
      800: "rgb(22 101 52)",
      900: "rgb(20 83 45)",
    },
    teal: {
      50: "rgb(240 253 250)",
      100: "rgb(204 251 241)",
      200: "rgb(153 246 228)",
      300: "rgb(94 234 212)",
      400: "rgb(45 212 191)",
      500: "rgb(20 184 166)",
      600: "rgb(13 148 136)",
      700: "rgb(15 118 110)",
      800: "rgb(17 94 89)",
      900: "rgb(19 78 74)",
    },
    blue: {
      50: "rgb(239 246 255)",
      100: "rgb(219 234 254)",
      200: "rgb(191 219 254)",
      300: "rgb(147 197 253)",
      400: "rgb(96 165 250)",
      500: "rgb(59 130 246)",
      600: "rgb(37 99 235)",
      700: "rgb(29 78 216)",
      800: "rgb(30 64 175)",
      900: "rgb(30 58 138)",
    },
    indigo: {
      50: "rgb(238 242 255)",
      100: "rgb(224 231 255)",
      200: "rgb(199 210 254)",
      300: "rgb(165 180 252)",
      400: "rgb(129 140 248)",
      500: "rgb(99 102 241)",
      600: "rgb(79 70 229)",
      700: "rgb(67 56 202)",
      800: "rgb(55 48 163)",
      900: "rgb(49 46 129)",
    },
    purple: {
      50: "rgb(250 245 255)",
      100: "rgb(243 232 255)",
      200: "rgb(233 213 255)",
      300: "rgb(216 180 254)",
      400: "rgb(192 132 252)",
      500: "rgb(168 85 247)",
      600: "rgb(147 51 234)",
      700: "rgb(126 34 206)",
    },
    pink: {
      50: "rgb(253 242 248)",
      100: "rgb(252 231 243)",
      200: "rgb(251 207 232)",
      300: "rgb(249 168 212)",
      400: "rgb(244 114 182)",
      500: "rgb(236 72 153)",
      600: "rgb(219 39 119)",
      700: "rgb(190 24 93)",
      800: "rgb(157 23 77)",
      900: "rgb(131 24 67)",
    },
    // TODO: add brown
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    "3xl": 2560,
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
