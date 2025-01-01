import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import styled from "styled-components";
import { StylelessButton } from "../styleless-button";

const StyledThemedButton = styled(StylelessButton)``;

const ThemedButton: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
> = (props) => {
  return <StyledThemedButton {...props} />;
};

export { ThemedButton };
