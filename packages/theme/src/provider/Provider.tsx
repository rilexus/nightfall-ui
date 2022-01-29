import React, { FC, useMemo } from "react";
import { CssProvider } from "@nightfall-ui/css";
import { usePrefersColorScheme } from "@nightfall-ui/hooks";
import { GlobalCss, ResetCss } from "../reset-css";
import { darkTheme } from "../themes/dark.theme";
import { lightTheme } from "../themes/light.theme";

const ThemeProvider: FC = ({ children }) => {
  const colorSchema = usePrefersColorScheme();

  const t = useMemo(
    () => (colorSchema === "dark" ? darkTheme : lightTheme),
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
