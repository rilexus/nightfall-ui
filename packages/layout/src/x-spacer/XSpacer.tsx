import styled from "styled-components";
import React, { FC } from "react";
import { Spacing } from "./Spacing.type";
import { getSpacing } from "../y-spacer/getSpacing";

const StyledHorizontalSpacer = styled.div<{ spacing: Spacing }>`
  margin-right: ${getSpacing()};
  &:last-child {
    margin-right: 0;
  }
`;

const XSpacer: FC<{ spacing?: Spacing }> = ({
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
