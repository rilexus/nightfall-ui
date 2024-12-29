import React, { FC } from "react";
import { CssProvider } from "../css-provider";
import { usePrefersColorScheme } from "@nightfall-ui/hooks";
import darkTheme from "../dark.theme";
import lightTheme from "../light.theme";

type Schema = "dark" | "light";

export const ThemeProvider: FC<{ schema?: Schema }> = ({
  children,
  schema,
}) => {
  const colorSchema = usePrefersColorScheme();
  const _schema = schema || colorSchema;

  const theme = _schema === "dark" ? darkTheme : lightTheme;

  return <CssProvider theme={theme}>{children}</CssProvider>;
};
