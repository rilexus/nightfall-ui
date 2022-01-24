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
import { pillButtonBackgroundColorCss } from "./css/pillButtonBackgroundColor";
import { pillButtonColorCss } from "./css/pillButtonColor.css";
import { px100, py25 } from "@nightfall-ui/theme";
import {
  useCallbackRef,
  useCSSProperties,
  useMouseDown,
} from "@nightfall-ui/hooks";
import { filledButtonClickAnimation } from "./css";

const smallPillButtonBorderRadius = css`
  border-radius: 0.3rem;
`;

const StyledSmallFilledButton = styled(StyledStylesButton)`
  ${pillButtonColorCss};
  ${regularNormalSMCss};
  ${pillButtonBackgroundColorCss};
  ${smallPillButtonBorderRadius};
  ${py25};
  ${px100};
  ${filledButtonClickAnimation};
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
