import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { useCSSProperties, useFocused } from "@nightfall-ui/hooks";
import {
  mx50,
  px50,
  px75,
  py50,
  roundedMD,
  themedTextColor,
} from "@nightfall-ui/theme";
import { useInputValue } from "../hooks";
import { regularNormalCss } from "@nightfall-ui/typography";
import { mergeRefs } from "@nightfall-ui/utils";
import {
  filledInputBackgroundColorCss,
  inputFocusCss,
  inputPlaceholderCss,
} from "../css";
import { InputPlaceholder } from "../components";

const StyledSquareFilledMediumInput = styled.input`
  ${mx50};
  ${py50};
  ${px75};
  ${themedTextColor};
  ${regularNormalCss};
  ${roundedMD};
  outline: none;
  border: none;
  ${filledInputBackgroundColorCss};
  ${inputFocusCss};
  ${inputPlaceholderCss};
`;

const SquareFilledMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>(({ placeholder, ...props }, outsideRef) => {
  const [focused, inputRef] = useFocused();
  const [value, valueRef] = useInputValue();

  const hasValue = !!value;

  const style = useCSSProperties(
    {
      position: "relative",
      display: "inline-block",
    },
    []
  );

  return (
    <div style={style}>
      {placeholder && (
        <InputPlaceholder focused={focused} hasValue={hasValue}>
          {placeholder}
        </InputPlaceholder>
      )}
      <StyledSquareFilledMediumInput
        {...props}
        placeholder={placeholder}
        ref={mergeRefs([inputRef, valueRef, outsideRef])}
      />
    </div>
  );
});
SquareFilledMediumInput.displayName = "SquareFilledMediumInput";
export { SquareFilledMediumInput };
