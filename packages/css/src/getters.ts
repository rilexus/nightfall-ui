import { Theme } from "./Theme.type";
import { access } from "./utils";

const color = (path: string) => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.colors);
  };
};
const textColor = (path: string) => {
  return ({ theme }: { theme: Theme }) => {
    return access(path, theme.textColor);
  };
};
const fontFamily = (type: "sans" | "mono" | "serif" = "sans") => {
  return ({ theme }: { theme: Theme }) => {
    return theme.font.family[type];
  };
};

export { color, fontFamily, textColor };
