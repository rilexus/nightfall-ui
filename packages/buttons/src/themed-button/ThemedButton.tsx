import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { StylelessButton } from "../styleless-button";

const StyledThemedButton = styled(StylelessButton)``;

const ThemedButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledThemedButton {...props} />;
};

export { ThemedButton };
