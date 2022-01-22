import React, { FC } from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";

const InputPlaceholder: FC<{ focused: boolean; hasValue: boolean }> = ({
  children,
  hasValue,
  focused,
}) => {
  const placeholderStyle = useCSSProperties(
    {
      pointerEvents: "none",
      transition: `opacity ${hasValue ? 0 : 200}ms ease 0ms`,
      color: "white",
      opacity: hasValue ? 0 : focused ? 0.1 : 0.3,
      position: "absolute",
      transform: `translateY(-50%)`,
      top: "50%",
      left: ".5rem",
    },
    [focused, hasValue]
  );
  return <span style={placeholderStyle}>{children}</span>;
};

export { InputPlaceholder };
