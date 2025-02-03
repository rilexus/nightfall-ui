import { Theme } from "@nightfall-ui/themes";
import { access } from "../../utils";

export const margin = (key: keyof Theme["margin"]): any => {
  return ({ theme }: { theme: Theme }): string => {
    //@ts-ignore
    return access(key, theme.padding);
  };
};
