import React, {
  createContext,
  FC,
  HTMLAttributes,
  useContext,
  useMemo,
} from "react";
import { useMediaQuery, useCSSProperties } from "@nightfall-ui/hooks";
import { useTheme } from "styled-components";
import { Theme, PaddingTheme } from "@nightfall-ui/css";
import { Ease } from "react-transitions-library";

const GridContext = createContext<string | null>(null);
const GridContextProvider = GridContext.Provider;

const useFlexContext = () => useContext(GridContext);

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

type GrindItemProps = { [Key in keyof Theme["breakpoints"]]?: number } & {
  columns?: number;
  timeout?: number;
  ease?: Ease;
  delay?: number;
};

const GridItem: FC<GrindItemProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  timeout = 200,
  ease = Ease.easeIn,
  delay = 0,
  columns = 12,
  ...props
}) => {
  const spacing = useFlexContext();
  const { breakpoints } = useTheme() as Theme;

  const sortedMedia = useMemo(() => {
    // sort theme.media in descending order
    return Object.entries(breakpoints).sort(descending);
  }, [breakpoints]);

  const queriesMap = sortedMedia.map(([queryName, deviceWidth], idx) => {
    // listen for every media query, if its satisfied => boolean
    return {
      [queryName]: useMediaQuery(
        `(${
          sortedMedia.length - 1 === idx ? "max" : "min"
        }-width: ${deviceWidth}px)`
      ), // => boolean
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
      transition: `flex-basis ${timeout}ms ${ease} ${delay}ms`,
      flexBasis: `${width}%`,
      paddingTop: spacing as string,
      paddingLeft: spacing as string,
    },
    [width, spacing]
  );

  const filteredProps = useMemo(
    () =>
      Object.entries(props).reduce((acc, [key, value]) => {
        if (key in breakpoints) return acc;
        return {
          ...acc,
          [key]: value,
        };
      }, {}),
    [props, breakpoints]
  );

  return (
    // override context value, in case we have nested grid
    <GridContextProvider value={null}>
      <div style={style} {...filteredProps}>
        {children}
      </div>
    </GridContextProvider>
  );
};
interface GridComposition {
  Item: typeof GridItem;
}

const Grid: FC<
  HTMLAttributes<HTMLDivElement> & { spacing?: keyof PaddingTheme }
> &
  GridComposition = ({ spacing = "0", children, ...props }) => {
  const theme = useTheme() as Theme;
  const style = useCSSProperties(
    {
      ...props.style,
      display: "flex",
      flexFlow: "row wrap",
      marginTop: `-${theme.padding[spacing]}`,
      marginLeft: `-${theme.padding[spacing]}`,
    },
    [props.style]
  );

  return (
    <GridContextProvider value={theme.padding[spacing]}>
      <div {...props} style={style}>
        {children}
      </div>
    </GridContextProvider>
  );
};

Grid.Item = GridItem;
Grid.Item.displayName = "GridItem";

export { Grid };
