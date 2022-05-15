import React, { FC, useMemo } from "react";
import { CssProvider } from "@nightfall-ui/css";
import { usePrefersColorScheme } from "@nightfall-ui/hooks";
import { GlobalCss, ResetCss } from "../reset-css";
import { darkTheme, lightTheme } from "../themes";

type Schema = "dark" | "light";

const ThemeProvider: FC<{ schema?: Schema }> = ({ children, schema }) => {
  const colorSchema = usePrefersColorScheme();
  const _schema = schema || colorSchema;

  const theme = useMemo(() => {
    return _schema === "dark" ? darkTheme : lightTheme;
  }, [_schema]);

  return (
    <CssProvider theme={theme}>
      <ResetCss />
      <GlobalCss />
      {children}
    </CssProvider>
  );
};

export { ThemeProvider };
