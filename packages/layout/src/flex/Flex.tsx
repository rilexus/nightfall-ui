import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledFlex = styled.div`
  display: flex;
`;

const Flex: FC<{
  align?: "center" | "end" | "start";
  direction?: "column" | "row";
  justify?: "center" | "around" | "between" | "evenly" | "left";
  style?: CSSProperties;
}> = ({
  children,
  direction = "row",
  align = "center",
  justify = "center",
  ...props
}) => {
  const style = useCSSProperties(
    {
      alignItems: align,
      flexDirection: direction,
      justifyContent:
        justify === "evenly" || justify === "around" || justify === "between"
          ? `space-${justify}`
          : justify,
      ...props.style,
    },
    [props.style]
  );
  return <StyledFlex style={style}>{children}</StyledFlex>;
};

export { Flex };
