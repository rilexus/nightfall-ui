import React, {
  CSSProperties,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from "react";
import styled from "styled-components";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledFlex = styled.div`
  display: flex;
`;

const Flex: FC<
  {
    align?: "center" | "end" | "start";
    direction?: "column" | "row";
    justify?:
      | "center"
      | "around"
      | "between"
      | "evenly"
      | "left"
      | "end"
      | "start";
    style?: CSSProperties;
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
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
  return (
    //@ts-ignore
    <StyledFlex {...props} style={style}>
      {children}
    </StyledFlex>
  );
};

export { Flex };
