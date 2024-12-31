import React, { CSSProperties, FC } from "react";
import { useTheme } from "styled-components";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { PaddingTheme, Theme } from "@nightfall-ui/css";

const Padding: FC<{ style?: CSSProperties; value?: keyof PaddingTheme }> = ({
  children,
  value = "62",
  ...props
}) => {
  const theme = useTheme() as Theme;
  const style = useCSSProperties(
    {
      padding: theme.padding[value],
      ...props.style,
    },
    [theme, value, props.style]
  );

  return <div style={style}>{children}</div>;
};

export { Padding };
