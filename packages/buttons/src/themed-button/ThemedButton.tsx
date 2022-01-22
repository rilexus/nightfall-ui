import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { StylelessButton } from "../styleless-button";
import { themedTextColor } from "@nightfall-ui/theme";

const StyledThemedButton = styled(StylelessButton)`
  ${themedTextColor};
`;

const ThemedButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledThemedButton {...props} />;
};

export { ThemedButton };
