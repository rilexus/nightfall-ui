import styled from "styled-components";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { margin } from "@nightfall-ui/css";
import { Spacing } from "./Spacing.type";

const StyledVerticalSpacer = styled.div<{ spacing: Spacing }>`
  margin-bottom: ${({ spacing }) => margin(spacing)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const YSpacer: FunctionComponent<PropsWithChildren<{ spacing?: Spacing }>> = ({
  children,
  spacing = "12",
}) => {
  return (
    <StyledVerticalSpacer spacing={spacing}>{children}</StyledVerticalSpacer>
  );
};

export { YSpacer, StyledVerticalSpacer };
