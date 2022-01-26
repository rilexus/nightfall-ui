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
} from "../../transitions";
import { px100, py25, roundedMD } from "@nightfall-ui/theme";
import { filledButtonCss } from "../css";
import { squareSmallButtonPadding } from "../../css";

const smallPillButtonBorderRadius = css`
  ${roundedMD};
`;

const StyledSmallFilledButton = styled(StyledStylesButton)`
  ${regularNormalSMCss};
  ${smallPillButtonBorderRadius};
  ${squareSmallButtonPadding};
  ${filledButtonCss}
`;

const FilledSquareSmallButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, outsideRef) => {
  return (
    <ButtonJumpTransition>
      <ButtonOpacityTransition>
        <ButtonScaleTransition>
          <StyledSmallFilledButton {...props} ref={outsideRef} />
        </ButtonScaleTransition>
      </ButtonOpacityTransition>
    </ButtonJumpTransition>
  );
});

export { FilledSquareSmallButton };
