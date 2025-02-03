import React, {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";

const Padding: FunctionComponent<
  PropsWithChildren<{ style?: CSSProperties; value: string }>
> = ({ children, value, ...props }) => {
  const style = useCSSProperties(
    {
      padding: value,
      ...props.style,
    },
    [value, props.style]
  );

  return <div style={style}>{children}</div>;
};

export { Padding };
