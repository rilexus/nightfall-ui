import { Theme } from "@nightfall-ui/themes";
import { access } from "../../utils";

export const padding = (key: keyof Theme["padding"]): any => {
  return ({ theme }: { theme: Theme }): string => {
    //@ts-ignore
    return access(key, theme.padding);
  };
};
