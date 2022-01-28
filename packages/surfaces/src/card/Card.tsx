import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { p125, roundedXL } from "@nightfall-ui/css";

const StyledCard = styled.div`
  background-color: rgb(30, 30, 32);
  ${roundedXL};
  ${p125};
`;

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, outsideRef) => {
    return <StyledCard {...props} ref={outsideRef} />;
  }
);

export { Card, StyledCard };
