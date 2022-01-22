import React, { FC } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, theme } from "../theme";

const defaultTheme = theme;

const ThemeProvider: FC<{ theme?: Theme }> = ({
  children,
  theme = defaultTheme,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider };
