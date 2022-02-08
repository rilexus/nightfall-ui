import styled from "styled-components";
import { bodyRegularPrimaryCss } from "@nightfall-ui/theme";
import React, { FC, HTMLAttributes } from "react";
import { StyledActionButton } from "./ActionButton.styled";
import { color } from "@nightfall-ui/css";

const Button = styled(StyledActionButton)<{ color: string }>`
  ${bodyRegularPrimaryCss};
  color: ${({ color: c }) => color(c)};
`;

const ActionButton: FC<
  HTMLAttributes<HTMLButtonElement> & { themeColor?: string }
> = ({ children, themeColor = "blue.400", ...props }) => {
  return (
    <Button {...props} color={themeColor}>
      {children}
    </Button>
  );
};

export { ActionButton };
