import styled from "styled-components";

const Margin = styled.div<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  margin-top: ${({ top }) => top};
  margin-right: ${({ right }) => right};
  margin-bottom: ${({ bottom }) => bottom};
  margin-left: ${({ left }) => left};
`;

export { Margin };
