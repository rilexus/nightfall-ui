import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const StyledZStack = styled.div`
  display: grid;
  * > {
    grid-area: 1/1;
  }
`;

const ZStack: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return <StyledZStack {...props}>{children}</StyledZStack>;
};

export { ZStack };
