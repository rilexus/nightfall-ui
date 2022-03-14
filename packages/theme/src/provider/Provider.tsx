import React, { FC, useMemo } from "react";
import { CssProvider } from "@nightfall-ui/css";
import { usePrefersColorScheme } from "@nightfall-ui/hooks";
import { GlobalCss, ResetCss } from "../reset-css";
import { darkTheme } from "../themes/dark.theme";

const ThemeProvider: FC = ({ children }) => {
  const colorSchema = usePrefersColorScheme();

  const t = useMemo(
    // TODO: add light theme values
    () => (colorSchema === "dark" ? darkTheme : darkTheme),
    [colorSchema]
  );

  return (
    <CssProvider theme={t}>
      <ResetCss />
      <GlobalCss />
      {children}
    </CssProvider>
  );
};

export { ThemeProvider };
