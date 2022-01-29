import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAccordionUlContext } from "./AccordionUl";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { mergeRefs } from "react-transitions-library";
import { useTheme } from "styled-components";

const getRelativeClientRect = (containerRect: any, elementRect: any) => {
  const containerTop = containerRect.top;
  const containerBottom = containerRect.bottom;
  const elementHeight = elementRect.height;
  const elementTop = elementRect.top;
  const elementBottom = elementRect.bottom;

  const containerTopElementDistance = elementTop - containerTop;
  const containerBottomElementDistance = (elementBottom - containerBottom) * -1;

  return {
    height: elementHeight,
    top: containerTopElementDistance,
    bottom: containerBottomElementDistance,
  };
};

function lerp(startValue: number, endValue: number, t: number) {
  return startValue * (1 - t) + endValue * t;
}

function mapScrollInterval(from: number, curr: number, to: number): number {
  if (curr <= from) return 0;
  if (curr >= to) return 1;
  return (curr - from) / (to - from);
}

const getTopValues = (containerRect: any, relativeClientRect: any) => {
  const mappedScrollTop = mapScrollInterval(
    0,
    relativeClientRect.top * -1,
    relativeClientRect.height
  );

  const translateZ =
    lerp(0, relativeClientRect.height / 2, mappedScrollTop) * -1;
  const opacity = 1 - mappedScrollTop;

  const translateY = lerp(0, relativeClientRect.height, mappedScrollTop);

  return {
    translateY,
    translateZ,
    opacity,
  };
};

const getBottomValue = (containerRect: any, relativeClientRect: any) => {
  const mappedScrollTop = mapScrollInterval(
    -20,
    relativeClientRect.bottom * -1,
    relativeClientRect.height
  );

  const translateZ =
    lerp(0, relativeClientRect.height / 2, mappedScrollTop) * -1;
  const opacity = 1 - mappedScrollTop;

  const translateY = lerp(0, relativeClientRect.height, mappedScrollTop) * -1;

  return {
    translateY,
    translateZ,
    opacity,
  };
};

const isLower = (containerRect: any, elementRect: any) => {
  const containerMiddle = (containerRect.bottom - containerRect.top) / 2;
  const relativeContainerMiddle = containerRect.bottom - containerMiddle;

  const elementMiddle = (elementRect.bottom - elementRect.top) / 2;
  const relativeElementMiddle = elementRect.bottom - elementMiddle;

  const isBelowMiddle = relativeContainerMiddle <= relativeElementMiddle;
  return isBelowMiddle;
};

function useAnimation<Elem = any>(): [CSSProperties, LegacyRef<Elem>] {
  const { rect, scroll }: any = useAccordionUlContext();

  const ref = useRef<Elem | null>(null);

  const topValue = useRef({ translateY: 0, translateZ: 0, opacity: 1 });
  const bottomValue = useRef({ translateY: 0, translateZ: 0, opacity: 0 });
  const isLowerMiddle = useRef(false);

  //@ts-ignore
  const elementRec = ref.current?.getBoundingClientRect() || {
    top: 1,
    bottom: 1,
    height: 1,
  };

  const relativeClientRect = getRelativeClientRect(rect, elementRec);

  topValue.current = getTopValues(
    rect,
    //@ts-ignore
    relativeClientRect
  );

  bottomValue.current = getBottomValue(
    rect,
    //@ts-ignore
    relativeClientRect
  );

  isLowerMiddle.current = isLower(
    rect,
    //@ts-ignore
    elementRec
  );

  const translateY = isLowerMiddle.current
    ? bottomValue.current.translateY
    : topValue.current.translateY;

  const opacity: number = isLowerMiddle.current
    ? (bottomValue.current.opacity as number)
    : (topValue.current.opacity as number);

  const translateZ = isLowerMiddle.current
    ? bottomValue.current.translateZ
    : topValue.current.translateZ;

  const values = useMemo(() => {
    return {
      opacity,
      translateY,
      translateZ,
    };
  }, [translateY, translateZ, opacity, scroll]);

  return [values, ref];
}

type Props = {
  animate?: boolean;
  name?: string;
  children?: ReactNode;
  style?: CSSProperties;
  index?: number;
};
const AccordionLi = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement> & Props
>(function AccordionLi(
  { children, style, name, animate = true, ...rest },
  outsideRef
) {
  //@ts-ignore
  const [{ opacity, translateY, translateZ }, ref] =
    useAnimation<HTMLLIElement>();
  const theme = useTheme();

  const getIndex = useCallback(() => {
    if ((opacity as number) <= 0.5) {
      return -2;
    }
    if ((opacity as number) < 0.98) {
      return -1;
    }
    return 1;
  }, [opacity]);

  const liStyle = useCSSProperties(
    {
      ...style,
      perspective: "1000px",
      zIndex: getIndex(),
      position: "relative",
    },
    [style, getIndex]
  );

  const transformStyle = useCSSProperties(
    {
      visibility: opacity === 0 ? "hidden" : "inherit",
      willChange: "transform",
      transform: `translate3d(0px, ${translateY}px, ${translateZ}px)`,
      position: "relative",
    },
    [opacity, translateZ, translateY]
  );

  const opacityStyle = useCSSProperties(
    {
      //@ts-ignore
      opacity: opacity ? 1 - opacity : 0,
      zIndex: 200,
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      //@ts-ignore
      backgroundColor: theme.colors.background,
    },
    [opacity]
  );

  return (
    <li {...rest} ref={mergeRefs([ref, outsideRef])} style={liStyle}>
      <div style={transformStyle}>
        <div style={opacityStyle} />
        {children}
      </div>
    </li>
  );
});

export { AccordionLi };
