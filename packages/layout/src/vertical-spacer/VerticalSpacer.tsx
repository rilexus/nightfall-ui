import styled from "styled-components";
import React, { FC } from "react";
import { getSpacing } from "./getSpacing";
import { Spacing } from "./Spacing.type";

const StyledVerticalSpacer = styled.div<{ spacing: Spacing }>`
  margin-bottom: ${getSpacing()};
  &:last-child {
    margin-bottom: 0;
  }
`;

const VerticalSpacer: FC<{ spacing?: Spacing }> = ({
  children,
  spacing = "medium",
}) => {
  return (
    <StyledVerticalSpacer spacing={spacing}>{children}</StyledVerticalSpacer>
  );
};

export { VerticalSpacer, StyledVerticalSpacer };
