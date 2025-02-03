import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalCss, ResetCss } from "../reset-css";
import { baseTheme } from "@nightfall-ui/themes";
import { access } from "../utils";

const merge = (hostObj: any, obj: any): any => {
  return Object.keys(obj).reduce((acc, key) => {
    if (key in acc && typeof acc[key] === "object") {
      return {
        ...acc,
        [key]: merge(acc[key], obj[key]),
      };
    }
    return { ...acc, [key]: obj[key] };
  }, hostObj);
};

const reconciliate = (defaultTheme: any, customTheme: any): any => {
  const rec = Object.entries(customTheme).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return {
        [key]: value({
          theme: defaultTheme,
          get: (path: string) => access(path, defaultTheme),
        }),
        ...acc,
      };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return merge(defaultTheme, rec);
};

const CssProvider = ({ theme, children }: any) => {
  const reconciliatedTheme = useMemo(() => {
    if (theme) {
      return reconciliate(baseTheme, theme);
    }
    return baseTheme;
  }, [theme]);
  return (
    <ThemeProvider theme={reconciliatedTheme}>
      <GlobalCss />
      <ResetCss />
      {children}
    </ThemeProvider>
  );
};

export { CssProvider };
