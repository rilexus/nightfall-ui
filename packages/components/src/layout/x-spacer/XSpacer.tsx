import styled from "styled-components";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Spacing } from "./Spacing.type";
import { getSpacing } from "../y-spacer/getSpacing";

const StyledHorizontalSpacer = styled.div<{ spacing: Spacing }>`
  margin-right: ${getSpacing()};
  &:last-child {
    margin-right: 0;
  }
`;

const XSpacer: FunctionComponent<PropsWithChildren<{ spacing?: Spacing }>> = ({
  children,
  spacing = "medium",
}) => {
  return (
    <StyledHorizontalSpacer spacing={spacing}>
      {children}
    </StyledHorizontalSpacer>
  );
};

export { XSpacer, StyledHorizontalSpacer };
