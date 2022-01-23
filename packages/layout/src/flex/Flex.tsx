import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledFlex = styled.div`
  display: flex;
`;

const Flex: FC<
  {
    justify?: "center" | "around" | "between" | "evenly" | "left";
  } & HTMLAttributes<HTMLDivElement>
> = ({ children, justify = "left", ...props }) => {
  const style = useCSSProperties(
    {
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
