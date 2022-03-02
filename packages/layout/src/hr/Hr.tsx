import React from "react";
import styled from "styled-components";
import { color } from "@nightfall-ui/css";

const StyledHr = styled.hr`
  border-color: ${color("gray.2")};
`;

const Hr = () => {
  return <StyledHr />;
};

export { Hr };
