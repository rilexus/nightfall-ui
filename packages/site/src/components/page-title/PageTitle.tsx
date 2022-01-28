import React, { FC } from "react";
import styled, { css } from "styled-components";
import { boldNormal3XLCss } from "@nightfall-ui/typography";

const pageTitleCss = css`
  ${boldNormal3XLCss};
`;

const StyledH1 = styled.h1`
  ${pageTitleCss};
`;

const PageTitle: FC = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export { PageTitle, StyledH1, pageTitleCss };
