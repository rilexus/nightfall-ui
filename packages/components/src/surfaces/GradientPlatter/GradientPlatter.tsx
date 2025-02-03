import React, { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";
import { ZStack } from "../../layout";

const Blur = styled.div`
  display: grid;
  &::after {
    content: "";
    grid-area: 1/1; // full container views
    mask: linear-gradient(0deg, transparent, black 80%);
    backdrop-filter: blur(10px) saturate(160%);
  }
`;

const GradientPlatter: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ZStack>
      <Blur />
      <div
        style={{
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </ZStack>
  );
};

export default GradientPlatter;
