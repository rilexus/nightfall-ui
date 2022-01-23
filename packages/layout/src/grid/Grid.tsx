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

const GridItem: FC<{
  small?: number;
  medium?: number;
  large?: number;
  tablet?: number;
  laptop?: number;
  desktop?: number;
  columns?: number;
}> = ({
  columns = 12,
  children,
  small,
  medium,
  large,
  laptop,
  tablet,
  desktop,
}) => {
  const { media } = useTheme() as Theme;
  const isSmall = useMediaQuery(`(min-width: ${media.small})`);
  const isMedium = useMediaQuery(`(min-width: ${media.medium})`);
  const isLarge = useMediaQuery(`(min-width: ${media.large})`);
  const isTablet = useMediaQuery(`(min-width: ${media.tablet})`);
  const isLaptop = useMediaQuery(`(min-width: ${media.laptop})`);
  const isDesktop = useMediaQuery(`(min-width: ${media.desktop})`);

  const spacing = useFlexContext();

  const width = useMemo(() => {
    const ratio = 100 / columns;
    if (isDesktop && desktop) {
      return ratio * desktop;
    }
    if (isLaptop && laptop) {
      return ratio * laptop;
    }
    if (isTablet && tablet) {
      return ratio * tablet;
    }
    if (isLarge && large) {
      return ratio * large;
    }
    if (isMedium && medium) {
      return ratio * medium;
    }
    if (isSmall && small) {
      return ratio * small;
    }
    return 100;
  }, [isSmall, isMedium, isLarge, isTablet, isLaptop, isDesktop, columns]);

  const style = useCSSProperties(
    {
      flexBasis: `${width}%`,
      paddingTop: spacing || "0px",
      paddingLeft: spacing || "0px",
    },
    [width, spacing]
  );

  return (
    <GridContext.Provider value={null}>
      <div style={style}>{children}</div>
    </GridContext.Provider>
  );
};

export { Grid, GridItem };
