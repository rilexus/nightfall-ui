import React, { createContext, FC, useContext, useMemo } from "react";
import { useMediaQuery, useCSSProperties } from "@nightfall-ui/hooks";
import { useTheme } from "styled-components";
import { Theme, PaddingTheme } from "@nightfall-ui/theme";

const GridContext = createContext<string | null>(null);
const GridContextProvider = GridContext.Provider;

const useFlexContext = () => useContext(GridContext);

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

type GrindItemProps = { [Key in keyof Theme["breakpoints"]]?: number } & {
  columns?: number;
};

const GridItem: FC<GrindItemProps> = ({ children, columns = 12, ...props }) => {
  const spacing = useFlexContext();
  const { breakpoints } = useTheme() as Theme;

  const sortedMedia = useMemo(() => {
    // sort theme.media in descending order
    return Object.entries(breakpoints).sort(descending);
  }, [breakpoints]);

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
    <GridContextProvider value={null}>
      <div style={style}>{children}</div>
    </GridContextProvider>
  );
};
interface GridComposition {
  Item: typeof GridItem;
}

const Grid: FC<{ spacing?: keyof PaddingTheme }> & GridComposition = ({
  spacing = "0",
  children,
}) => {
  const theme = useTheme() as Theme;
  const style = useCSSProperties(
    {
      display: "flex",
      flexFlow: "row wrap",
      marginTop: `-${theme.padding[spacing]}`,
      marginLeft: `-${theme.padding[spacing]}`,
    },
    []
  );

  return (
    <GridContextProvider value={theme.padding[spacing]}>
      <div style={style}>{children}</div>
    </GridContextProvider>
  );
};

Grid.Item = GridItem;
Grid.Item.displayName = "GridItem";

export { Grid };
