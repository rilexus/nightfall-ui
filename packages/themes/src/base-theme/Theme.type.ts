export type Spacing = {
  "0": string;
  "1": string;
  "12": string;
  "25": string;
  "37": string;
  "50": string;
  "62": string;
  "75": string;
  "87": string;
  "100": string;
  "125": string;
  "150": string;
  "175": string;
  "200": string;
  "225": string;
  "250": string;
  "275": string;
  "300": string;
};

export type Theme = {
  name: string;
  backdrop: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
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
  margin: Spacing;
  padding: Spacing;
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
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
    "3xl": number;
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
};
