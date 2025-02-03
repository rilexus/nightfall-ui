import React from "react";
import styled from "styled-components";

const ZStack = styled.div`
  display: grid;
  & > * {
    grid-area: 1/1;
  }
`;

export { ZStack };
