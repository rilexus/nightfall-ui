import styled from "styled-components";
import { bodyRegularPrimaryCss } from "@nightfall-ui/typography";
import React, { FC, HTMLAttributes } from "react";
import { StyledActionButton } from "./ActionButton.styled";
import { color as getColor, Theme } from "@nightfall-ui/css";

const Button = styled(StyledActionButton)<{ color: string; theme: Theme }>`
  ${bodyRegularPrimaryCss};
  color: ${({ color, ...rest }) => {
    console.log("hier", getColor(color)(rest));
    //@ts-ignore
    return getColor(color)(rest);
  }};
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
