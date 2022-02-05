import { GenericTheme, Theme } from "../Theme.type";

function lineHeight<T extends GenericTheme = Theme>(
  name: keyof (Theme["lineHeight"] & T["lineHeight"])
) {
  // TODO: type theme here
  return ({ theme }: any) => {
    return theme.lineHeight[name];
  };
}

export { lineHeight };
