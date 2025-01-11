import { useMediaQuery } from "../use-media-query";

function useBreakpoints<Breakpoints extends {}>(breakpoints: Breakpoints) {
  return Object.entries(breakpoints).reduce((acc, [query, value]) => {
    return {
      ...acc,
      // eslint-disable-next-line react-hooks/rules-of-hooks
      [query]: useMediaQuery(`(min-width: ${value}px)`),
    };
  }, {});
}

export default useBreakpoints;
