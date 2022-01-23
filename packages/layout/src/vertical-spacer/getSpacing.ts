import { margin, MarginTheme } from "@nightfall-ui/theme";
import { Spacing } from "./Spacing.type";

function getSpacing() {
  return ({ spacing }: { spacing: Spacing }) => {
    if (spacing === "extra-small") {
      return margin("12");
    }
    if (spacing === "small") {
      return margin("37");
    }
    if (spacing === "medium") {
      return margin("50");
    }
    if (spacing === "large") {
      return margin("100");
    }
    if (spacing === "extra-large") {
      return margin("200");
    }
    return margin(spacing as keyof MarginTheme);
  };
}

export { getSpacing };
