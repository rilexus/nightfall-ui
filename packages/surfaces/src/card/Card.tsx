import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { p125, roundedXL } from "@nightfall-ui/theme";

const StyledCard = styled.div`
  background-color: rgb(30, 30, 32);
  ${roundedXL};
  ${p125};
`;

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export { Card, StyledCard };
