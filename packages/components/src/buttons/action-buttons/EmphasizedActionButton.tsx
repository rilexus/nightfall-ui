import styled from "styled-components";
import { bodyBoldPrimaryCss } from "@nightfall-ui/typography";
import React, { FC, HTMLAttributes } from "react";
import { StyledActionButton } from "./ActionButton.styled";
import { color } from "@nightfall-ui/css";
import { Theme } from "@nightfall-ui/themes";

const Button = styled(StyledActionButton)<{ color: string; theme: Theme }>`
  ${bodyBoldPrimaryCss};
  color: ${({ color: c, ...rest }) => {
    //@ts-ignore
    return color(c)(rest);
  }};
`;

const EmphasizedActionButton: FC<
  HTMLAttributes<HTMLButtonElement> & { themeColor?: string }
> = ({ children, themeColor = "blue.400", ...props }) => {
  return (
    <Button {...props} color={themeColor}>
      {children}
    </Button>
  );
};

export { EmphasizedActionButton };
