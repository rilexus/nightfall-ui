import React, { createContext, FC, useContext, useMemo } from "react";
import { useMediaQuery, useCSSProperties } from "@nightfall-ui/hooks";
import { useTheme } from "styled-components";
import { Theme, PaddingTheme } from "@nightfall-ui/theme";

const GridContext = createContext<string | null>(null);

const useFlexContext = () => useContext(GridContext);

const Grid: FC<{ spacing?: keyof PaddingTheme }> = ({
  spacing = "0",
  children,
}) => {
  const style = useCSSProperties(
    {
      display: "flex",
      flexFlow: "row wrap",
      marginTop: `-${spacing}`,
      marginLeft: `-${spacing}`,
    },
    []
  );

  const theme = useTheme() as Theme;
  return (
    <GridContext.Provider value={theme.padding[spacing]}>
      <div style={style}>{children}</div>
    </GridContext.Provider>
  );
};

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

const GridItem: FC<
  { [Key in keyof Theme["media"]]?: number } & { columns?: number }
> = ({ children, columns = 12, ...props }) => {
  const spacing = useFlexContext();
  const { media } = useTheme() as Theme;

  const sortedMedia = useMemo(() => {
    // sort theme.media in descending order
    return Object.entries(media).sort(descending);
  }, [media]);

  const queriesMap = sortedMedia.map(([queryName, deviceWidth]) => {
    // listen for every media query, if its satisfied => boolean
    return {
      [queryName]: useMediaQuery(`(min-width: ${deviceWidth}px)`), // => boolean
    };
  });

  let width = 100; // percent
  const ratio = 100 / columns;

  for (let i = 0; i < queriesMap.length; i++) {
    const currentQuery = queriesMap[i];
    const [[queryName, querySatisfied]] = Object.entries(currentQuery);
    if (querySatisfied && queryName in props) {
      //@ts-ignore
      width = ratio * props[queryName]; // in percent
      // return first satisfied query width
      break;
    }
  }

  const style = useCSSProperties(
    {
      flexBasis: `${width}%`,
      paddingTop: spacing || "0px",
      paddingLeft: spacing || "0px",
    },
    [width, spacing]
  );

  return (
    // override context value, in case we have nested grid
    <GridContext.Provider value={null}>
      <div style={style}>{children}</div>
    </GridContext.Provider>
  );
};

export { Grid, GridItem };
