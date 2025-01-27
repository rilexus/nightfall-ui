import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { GlobalCss, ResetCss } from "../reset-css";

const defaultTheme = theme;

const access = (
  path: string /* key.path.to.object.value */,
  object: { [key: string]: object }
): any => {
  // Gets value from object by given path.
  //@ts-ignore
  const value = path.split(".").reduce((value, key) => value[key], object);
  if (!value) {
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

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
      return reconciliate(defaultTheme, theme);
    }
    return defaultTheme;
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
