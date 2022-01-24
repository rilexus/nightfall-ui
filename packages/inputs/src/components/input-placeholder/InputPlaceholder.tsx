import React, { FC, HTMLAttributes } from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";
import styled from "styled-components";
import { absolute, themedTextColor } from "@nightfall-ui/theme";

const StyledSpan = styled.span`
  pointer-events: none;
  ${themedTextColor};
  ${absolute};
  transform: translateY(-50%);
  top: 50%;
  left: 0.5rem;
`;

const InputPlaceholder: FC<
  { focused: boolean; hasValue: boolean } & HTMLAttributes<HTMLSpanElement>
> = ({ children, hasValue, focused, ...props }) => {
  const placeholderStyle = useCSSProperties(
    {
      transition: `opacity ${hasValue ? 0 : 200}ms ease 0ms`,
      opacity: hasValue ? 0 : focused ? 0.1 : 0.3,
      ...props.style,
    },
    [focused, hasValue]
  );
  return (
    <StyledSpan {...props} style={placeholderStyle}>
      {children}
    </StyledSpan>
  );
};

export { InputPlaceholder };
