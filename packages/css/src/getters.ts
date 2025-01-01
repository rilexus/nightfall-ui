import { Theme } from "./Theme.type";
import { access } from "./utils";

export const color = (path: string): any => {
  return ({ theme }: { theme: Theme }): any => {
    return access(path, theme.colors);
  };
};

export const textColor = (path: string): any => {
  return ({ theme }: { theme: Theme }): string => {
    return access(path, theme.textColor);
  };
};

export const fontFamily = (type: "sans" | "mono" | "serif" = "sans"): any => {
  return ({ theme }: { theme: Theme }) => {
    return theme.font.family[type];
  };
};

export const lineHeight = (path: string): any => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.lineHeight);
  };
};
