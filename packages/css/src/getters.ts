import { Theme } from "./Theme.type";
import { access } from "./utils";

export const color = (path: string) => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.colors);
  };
};

export const textColor = (path: string) => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.textColor);
  };
};

export const fontFamily = (type: "sans" | "mono" | "serif" = "sans") => {
  return ({ theme }: { theme: Theme }) => {
    return theme.font.family[type];
  };
};

export const lineHeight = (path: string) => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.lineHeight);
  };
};
