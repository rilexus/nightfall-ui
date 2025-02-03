import styled from "styled-components";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { margin } from "@nightfall-ui/css";
import { Spacing } from "@nightfall-ui/themes";

const StyledVerticalSpacer = styled.div<{ spacing: keyof Spacing }>`
  margin-bottom: ${({ spacing }) => margin(spacing)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const YSpacer: FunctionComponent<
  PropsWithChildren<{ spacing?: keyof Spacing }>
> = ({ children, spacing = "12" }) => {
  return (
    <StyledVerticalSpacer spacing={spacing}>{children}</StyledVerticalSpacer>
  );
};

export { YSpacer, StyledVerticalSpacer };
