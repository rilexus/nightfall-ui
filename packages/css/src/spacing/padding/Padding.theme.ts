import { Theme } from "../../Theme.type";

type PaddingTheme = {
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

const paddingTheme: PaddingTheme = {
  0: "0px",
  1: "1px",
  12: "0.125rem",
  25: "0.25rem",
  37: "0.375rem",
  50: "0.5rem",
  62: "0.625rem",
  75: "0.75rem",
  87: "0.875rem",
  100: "1rem",
  125: "1.25rem",
  150: "1.5rem",
  175: "1.75rem",
  200: "2rem",
  225: "2.25rem",
  250: "2.5rem",
  275: "2.75rem",
  300: "3rem",
};

type Padding = keyof PaddingTheme;

const padding = (value: Padding) => {
  return ({ theme }: { theme: Theme }) => {
    return theme.padding[value];
  };
};

export { paddingTheme, padding };
export type { PaddingTheme };
