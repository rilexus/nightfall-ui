import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
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

const StylelessButton: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
> = (props) => {
  return <StyledStylesButton {...props} />;
};

export { StyledStylesButton, StylelessButton };
