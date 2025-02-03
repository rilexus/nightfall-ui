import styled from "styled-components";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { margin } from "@nightfall-ui/css";
import { Spacing } from "@nightfall-ui/themes";

const StyledHorizontalSpacer = styled.div<{ spacing: keyof Spacing }>`
  margin-right: ${({ spacing }) => margin(spacing)};
  &:last-child {
    margin-right: 0;
  }
`;

const XSpacer: FunctionComponent<
  PropsWithChildren<{ spacing?: keyof Spacing }>
> = ({ children, spacing = "12" }) => {
  return (
    <StyledHorizontalSpacer spacing={spacing}>
      {children}
    </StyledHorizontalSpacer>
  );
};

export { XSpacer, StyledHorizontalSpacer };
