import React, { FC } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Theme } from "../Theme.type";

const defaultTheme = theme;

const ThemeProvider: FC<{ theme?: Theme }> = ({
  children,
  theme = defaultTheme,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider };
