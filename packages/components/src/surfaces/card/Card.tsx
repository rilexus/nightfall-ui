import React from "react";
import styled, { css } from "styled-components";
import { color, dropShadowSM, p125, roundedXL } from "@nightfall-ui/css";

const cardCss = css`
  background-color: ${color("background.elevated.primary")};
  ${roundedXL};
  ${p125};
  ${dropShadowSM};
`;

const Card = styled.div`
  ${cardCss};
`;

export { Card, cardCss };
