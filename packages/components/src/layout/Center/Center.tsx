import React from "react";
import { media, Theme } from "@nightfall-ui/css";
import styled from "styled-components";

type MediaProps = { [Key in keyof Theme["breakpoints"]]?: number };

/**
 * Centers children relative to the parent.
 * If media query values are provided, the width will be adjusted, 100% otherwise.
 * @example
 * <Center small={80} medium={50}>
 *     <div>
 *         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste
 *         mollitia nemo nulla sapiente suscipit, tenetur totam? Aliquam culpa
 *         distinctio fugiat iste nihil odit quae reprehenderit tempore tenetur
 *         velit, voluptatibus.
 *     </div>
 * </Center>
 */
const Center = styled.div<MediaProps>`
  margin: auto;
  width: 100%;

  ${({ small, theme }: any) => {
    return `@media only screen and (max-width: ${theme.breakpoints.small}px) {
      width: ${small}%;
    }`;
  }};

  ${media.medium`
    ${({ medium }: any) => `width: ${medium}%`};
  `};

  ${media.large`
    ${({ large }: any) => `width: ${large}%`};
  `};

  ${media.tablet`
    ${({ tablet }: any) => `width: ${tablet}%`};
  `};

  ${media.laptop`
    ${({ laptop }: any) => `width: ${laptop}%`};
  `};

  ${media.desktop`
    ${({ desktop }: any) => `width: ${desktop}%`};
  `};
`;

export default Center;
