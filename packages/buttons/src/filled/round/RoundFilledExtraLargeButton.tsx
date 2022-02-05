import styled from "styled-components";
import { filledButtonCss, roundedButtonCss } from "../css";
import React, { forwardRef, HTMLAttributes } from "react";
import { useRoundButtonRadius } from "../../hooks";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
} from "../../transitions";
import { regularNormalCss } from "@nightfall-ui/css";
import { useCSSProperties } from "@nightfall-ui/hooks";

const StyledButton = styled.button`
  ${roundedButtonCss};
  ${filledButtonCss};
  ${regularNormalCss};
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
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledButton {...props} style={style} ref={outsideRef}>
            <div style={noSelect} ref={ref}>
              {children}
            </div>
          </StyledButton>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});
export { RoundFilledExtraLargeButton };
