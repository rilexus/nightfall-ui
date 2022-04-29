import styled from "styled-components";
import { filledButtonCss, roundedButtonCss } from "../css";
import React, { forwardRef, HTMLAttributes } from "react";
import { useRoundButtonRadius } from "../../hooks";

import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledButton = styled.button`
  ${roundedButtonCss};
  ${filledButtonCss};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundFilledExtraLargeButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, outsideRef) => {
  const [style, ref] = useRoundButtonRadius("175");

  const noSelect = useCSSProperties(
    {
      userSelect: "none",
    },
    []
  );
  return (
    <StyledButton {...props} style={style} ref={outsideRef}>
      <div style={noSelect} ref={ref}>
        {children}
      </div>
    </StyledButton>
  );
});
export { RoundFilledExtraLargeButton };
