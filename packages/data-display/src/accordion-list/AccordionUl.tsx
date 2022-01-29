import React, {
  createContext,
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useCSSProperties,
  useResizeObserver,
  useScroll,
} from "@nightfall-ui/hooks";
import { mergeRefs } from "@nightfall-ui/utils";

const Context = createContext({});

const useAccordionUlContext = () => useContext(Context);

enum SCROLL_ON_ADD_VALUES {
  BOTTOM = "BOTTOM",
  TOP = "TOP",
  NONE = "NONE",
}

type Props = {
  style?: CSSProperties;
  scrollOnAdd?: SCROLL_ON_ADD_VALUES;
};

const AccordionUl = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement> & Props
>(function AccordionUl(
  { children, style, scrollOnAdd = SCROLL_ON_ADD_VALUES.NONE, ...rest },
  outsideRef: any
) {
  const [containerScrollPosition, setContainerScrollPosition] = useState(0);
  const [containerBoundingClientRect, setContainerBoundingClientRect] =
    useState({
      top: 1,
      bottom: 1,
      height: 1,
    });

  const containerRef = useRef<HTMLUListElement | null>(null);

  const scrollRef = useScroll((e: any) => {
    const v = e.target.scrollTop;
    setContainerScrollPosition(() => v);
  });

  const observerRef = useResizeObserver((rect: any) => {
    setContainerBoundingClientRect(rect);
  });

  const [childCount, setChildCount] = useState(React.Children.count(children));

  useEffect(() => {
    setChildCount((oldCount) => {
      const elem = containerRef.current;
      const newCount = React.Children.count(children);
      const behavior = "smooth";
      if (elem && oldCount > newCount) {
        if (scrollOnAdd === SCROLL_ON_ADD_VALUES.BOTTOM) {
          elem.scrollTo({
            top: elem.scrollHeight,
            behavior,
          });
        } else if (scrollOnAdd === SCROLL_ON_ADD_VALUES.TOP) {
          elem.scrollTo({
            top: 0,
            behavior,
          });
        }
      }
      return newCount;
    });
  }, [React.Children.count(children), containerRef]);

  const contextValue = useMemo(() => {
    return {
      childCount: childCount,
      scroll: containerScrollPosition,
      rect: containerBoundingClientRect,
    };
  }, [containerScrollPosition, containerBoundingClientRect, childCount]);

  const ulStyle = useCSSProperties(
    {
      listStyle: "none",
      margin: 0,
      padding: 0,
      overflowY: "scroll",
      ...style,
    },
    [style]
  );

  return (
    <ul
      {...rest}
      ref={mergeRefs([containerRef, observerRef, outsideRef, scrollRef])}
      style={ulStyle}
    >
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </ul>
  );
});

export { AccordionUl, useAccordionUlContext, SCROLL_ON_ADD_VALUES };
