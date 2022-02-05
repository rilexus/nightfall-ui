import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { color, p125, roundedXL } from "@nightfall-ui/css";

const StyledCard = styled.div`
  background-color: ${color("background.elevated.primary")};
  ${roundedXL};
  ${p125};
`;

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, outsideRef) => {
    return <StyledCard {...props} ref={outsideRef} />;
  }
);

export { Card, StyledCard };
