import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";

import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import { filledButtonCss, roundedButtonCss } from "../css";
import { useRoundButtonRadius } from "../../hooks";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledRoundFilledMediumButton = styled.button`
  ${roundedButtonCss};
  ${filledButtonCss};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundFilledMediumButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, outsideRef) => {
  const [style, ref] = useRoundButtonRadius("100");
  const noSelect = useCSSProperties(
    {
      userSelect: "none",
    },
    []
  );

  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledRoundFilledMediumButton
            {...props}
            ref={outsideRef}
            style={style}
          >
            <div style={noSelect} ref={ref}>
              {children}
            </div>
          </StyledRoundFilledMediumButton>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

RoundFilledMediumButton.displayName = "RoundFilledMediumButton";

export { RoundFilledMediumButton };
