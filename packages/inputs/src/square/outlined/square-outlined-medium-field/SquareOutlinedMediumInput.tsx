import React, { forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { inputCss, mediumInputPadding, outlineInputCss } from "../../../css";
import { roundedLG } from "@nightfall-ui/theme";

const StyledSquareOutlinedMediumInput = styled.input`
  ${mediumInputPadding};
  ${roundedLG};
  ${outlineInputCss};

  ${inputCss};
`;

const SquareOutlinedMediumInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, outsideRef) => {
  return <StyledSquareOutlinedMediumInput {...props} ref={outsideRef} />;
});

SquareOutlinedMediumInput.displayName = "SquareOutlinedMediumInput";

export { SquareOutlinedMediumInput };
