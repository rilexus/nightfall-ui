import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
} from "../css";
import { px75, py25, roundedMD, themedTextColor } from "@nightfall-ui/theme";
import { regularNormalCss } from "@nightfall-ui/typography";
import { InputPlaceholder } from "../components";
import { useFocused } from "@nightfall-ui/hooks";
import { useInputValue } from "../hooks";
import { mergeRefs } from "@nightfall-ui/utils";

const StyledSquareFilledSmallInput = styled.input`
  outline: none;
  border: none;
  ${roundedMD};
  ${themedTextColor};
  ${px75};
  ${py25};
  ${regularNormalCss};
  ${filledInputBackgroundColorCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareFilledSmallInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>(({ placeholder, ...props }, outsideRef) => {
  const [focused, inputRef] = useFocused();
  const [value, valueRef] = useInputValue();

  const hasValue = !!value;
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
      }}
    >
      {placeholder && (
        <InputPlaceholder focused={focused} hasValue={hasValue}>
          {placeholder}
        </InputPlaceholder>
      )}
      <StyledSquareFilledSmallInput
        {...props}
        placeholder={placeholder}
        ref={mergeRefs([outsideRef, inputRef, valueRef])}
      />
    </div>
  );
});

export { SquareFilledSmallInput };
