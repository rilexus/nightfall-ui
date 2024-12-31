import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { selectNoneCss } from "@nightfall-ui/css";
const StyledStylesButton = styled.button`
  ${selectNoneCss};
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StylelessButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledStylesButton {...props} />;
};

export { StyledStylesButton, StylelessButton };
