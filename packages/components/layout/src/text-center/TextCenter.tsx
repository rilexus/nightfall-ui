import React, { FC, HTMLAttributes } from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";

const TextCenter: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const style = useCSSProperties({ ...props.style, textAlign: "center" }, [
    props.style,
  ]);
  return (
    <div {...props} style={style}>
      {children}
    </div>
  );
};

export { TextCenter };
