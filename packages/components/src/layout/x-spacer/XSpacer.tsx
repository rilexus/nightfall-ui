import styled from "styled-components";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { margin } from "@nightfall-ui/css";
import { Spacing } from "../y-spacer";

const StyledHorizontalSpacer = styled.div<{ spacing: Spacing }>`
  margin-right: ${({ spacing }) => margin(spacing)};
  &:last-child {
    margin-right: 0;
  }
`;

const XSpacer: FunctionComponent<PropsWithChildren<{ spacing?: Spacing }>> = ({
  children,
  spacing = "12",
}) => {
  return (
    <StyledHorizontalSpacer spacing={spacing}>
      {children}
    </StyledHorizontalSpacer>
  );
};

export { XSpacer, StyledHorizontalSpacer };
