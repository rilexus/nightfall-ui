import { MarginTheme } from "./MarginTheme";
import { Theme } from "../../Theme.type";

const marginTheme: MarginTheme = {
  "0": "0px",
  "1": "1px",
  "12": "0.125rem",
  "25": "0.25rem",
  "37": "0.375rem",
  "50": "0.5rem",
  "62": "0.625rem",
  "75": "0.75rem",
  "87": "0.875rem",
  "100": "1rem",
  "125": "1.25rem",
  "150": "1.5rem",
  "175": "1.75rem",
  "200": "2rem",
  "225": "2.25rem",
  "250": "2.5rem",
  "275": "2.75rem",
  "300": "3rem",
};

const margin =
  (value: keyof MarginTheme) =>
  ({ theme }: { theme: Theme }) => {
    return theme.margin[value];
  };

export { marginTheme, margin };
