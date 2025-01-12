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

const FlowContext = createContext<string | null>(null);
const FlowContextProvider = FlowContext.Provider;

const useFlexContext = () => useContext(FlowContext);

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

type GrindItemProps = { [Key in keyof Theme["breakpoints"]]?: number } & {
  timeout?: number;
  ease?: Ease;
  delay?: number;
  default?: number;
};

const FlowItem: FC<GrindItemProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ["default"]: _default = 100,
  timeout = 200,
  ease = Ease.easeIn,
  delay = 0,
  ...props
}) => {
  const spacing = useFlexContext();
  const { breakpoints } = useTheme() as Theme;

  const sortedMedia = useMemo(() => {
    // sort theme.media in descending order
    return Object.entries(breakpoints).sort(descending);
  }, [breakpoints]);

  const queriesMap = sortedMedia.map(([queryName, deviceWidth]) => {
    // listen for every media query, if its satisfied => boolean
    return {
      [queryName]: useMediaQuery(`(min-width: ${deviceWidth}px)`),
    };
  });

  let width = _default; // percent

  for (let i = 0; i < queriesMap.length; i++) {
    const currentQuery = queriesMap[i];
    const [[queryName, querySatisfied]] = Object.entries(currentQuery);
    if (querySatisfied && queryName in props) {
      //@ts-ignore
      width = props[queryName]; // in percent
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
    // override context value, in case we have nested Flow
    <FlowContextProvider value={null}>
      <div style={style} {...filteredProps}>
        {children}
      </div>
    </FlowContextProvider>
  );
};
interface FlowComposition {
  Item: typeof FlowItem;
}

const Flow: FC<
  HTMLAttributes<HTMLDivElement> & { spacing?: keyof PaddingTheme }
> &
  FlowComposition = ({ spacing = "0", children, ...props }) => {
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
    <FlowContextProvider value={theme.padding[spacing]}>
      <div {...props} style={style}>
        {children}
      </div>
    </FlowContextProvider>
  );
};

Flow.Item = FlowItem;
Flow.Item.displayName = "FlowItem";

export { Flow };
