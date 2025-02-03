import { CSSProperties, useMemo } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@nightfall-ui/hooks";
import { Theme } from "@nightfall-ui/themes";

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

const useBreakpointStyle = (styles: {
  [Key in keyof Theme["breakpoints"]]?: CSSProperties;
}) => {
  const { breakpoints } = useTheme() as Theme;

  const sortedMedia = useMemo(() => {
    // sort theme.media in descending order
    return Object.entries(breakpoints).sort(descending);
  }, [breakpoints]);

  const queriesMap = sortedMedia.map(([queryName, deviceWidth], idx) => {
    // listen for every media query, if its satisfied => boolean
    return {
      [queryName]: useMediaQuery(
        // this is a HOOK: do not wrap in memo
        `(${
          sortedMedia.length - 1 === idx ? "max" : "min"
        }-width: ${deviceWidth}px)`
      ), // => boolean
    };
  });

  let style = {};

  for (let i = 0; i < queriesMap.length; i++) {
    const currentQuery = queriesMap[i];
    const [[queryName, querySatisfied]] = Object.entries(currentQuery);
    if (querySatisfied && queryName in styles) {
      //@ts-ignore
      style = styles[queryName];
      break;
    }
  }

  return style;
};
export { useBreakpointStyle };
