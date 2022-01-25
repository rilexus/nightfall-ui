import { PaddingTheme, Theme } from "@nightfall-ui/theme";
import {
  CSSProperties,
  LegacyRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import { useCSSProperties } from "@nightfall-ui/hooks";

const useRoundButtonRadius = (
  key: keyof PaddingTheme
): [CSSProperties, LegacyRef<any>] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState(0);
  const { padding: p } = useTheme() as Theme;

  useLayoutEffect(() => {
    const child = ref.current;
    if (child) {
      const width = child.getBoundingClientRect().width;
      const height = child.getBoundingClientRect().height;
      const radius = Math.max(width as number, height as number);
      setRadius(radius);
    }
  }, [ref]);

  const padding = p[key];

  const style = useCSSProperties(
    {
      height: `calc(${radius}px + ${padding} * 2)`,
      width: `calc(${radius}px + ${padding} * 2)`,
    },
    [radius, padding]
  );

  return [style, ref];
};

export { useRoundButtonRadius };
