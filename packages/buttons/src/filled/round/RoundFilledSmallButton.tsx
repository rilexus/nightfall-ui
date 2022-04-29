import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { filledButtonCss, roundedButtonCss } from "../css";

import { useRoundButtonRadius } from "../../hooks";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledRoundFilledSmallButton = styled.button`
  ${roundedButtonCss};
  ${filledButtonCss};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundFilledSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, outsideRef) => {
  const [style, ref] = useRoundButtonRadius("62");
  const noSelect = useCSSProperties(
    {
      userSelect: "none",
    },
    []
  );
  return (
    <StyledRoundFilledSmallButton {...props} style={style} ref={outsideRef}>
      <div style={noSelect} ref={ref}>
        {children}
      </div>
    </StyledRoundFilledSmallButton>
  );
});

RoundFilledSmallButton.displayName = "RoundFilledSmallButton";

export { RoundFilledSmallButton };
