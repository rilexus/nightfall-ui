import React, {
  CSSProperties,
  FC,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { StyledStylesButton } from "../../styleless-button";
import { regularNormalSMCss } from "@nightfall-ui/typography";
import {
  ButtonJumpTransition,
  ButtonOpacityTransition,
  ButtonScaleTransition,
  RotationTransition,
} from "../../transitions";
import { px100, py25 } from "@nightfall-ui/theme";
import { useCallbackRef } from "@nightfall-ui/hooks";
import { filledButtonCss } from "../css";

const smallPillButtonBorderRadius = css`
  border-radius: 0.3rem;
`;

const StyledSmallFilledButton = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${smallPillButtonBorderRadius};
  ${py25};
  ${px100};

  ${filledButtonCss}
`;

const useClick = (callback: () => void) => {
  const callbackRef = useCallbackRef(callback);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    const handle = () => callbackRef.current();
    if (element) {
      element.addEventListener("click", handle);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", handle);
      }
    };
  }, [ref, callbackRef]);

  return ref;
};

const FilledSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <RotationTransition deg={5}>
            <StyledSmallFilledButton {...props} ref={outsideRef} />
          </RotationTransition>
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareSmallButton };
