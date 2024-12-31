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

const YSpacer: FC<{ spacing?: Spacing }> = ({
  children,
  spacing = "small",
}) => {
  return (
    <StyledVerticalSpacer spacing={spacing}>{children}</StyledVerticalSpacer>
  );
};

export { YSpacer, StyledVerticalSpacer };
