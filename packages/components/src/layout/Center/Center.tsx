import React from "react";
import { media } from "@nightfall-ui/css";
import styled from "styled-components";
import { Theme } from "@nightfall-ui/themes";

type Default = { default?: number };

type MediaProps = {
  [Key in keyof Theme["breakpoints"]]?: number;
} & Default;

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
  width: ${({ ["default"]: _default }) => _default || 100}%;

  ${media.sm`
    ${({ sm }: any) => `width: ${sm}%`};
  `};

  ${media.md`
    ${({ md }: any) => `width: ${md}%`};
  `};

  ${media.lg`
    ${({ lg }: any) => `width: ${lg}%`};
  `};

  ${media.xl`
    ${({ xl }: any) => `width: ${xl}%`};
  `};

  ${media["2xl"]`
    ${({ ["2xl"]: value }: any) => `width: ${value}%`};
  `};
`;

export default Center;
