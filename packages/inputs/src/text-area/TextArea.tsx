import React, { forwardRef, TextareaHTMLAttributes, VFC } from "react";
import styled from "styled-components";
import {
  inputBorderRadius,
  inputCss,
  mediumInputPadding,
  outlinedInputBackgroundCss,
  outlinedInputBorderCss,
} from "../css";

const StyledTextarea = styled.textarea`
  ${inputCss};
  ${outlinedInputBackgroundCss};
  ${inputBorderRadius};
  ${outlinedInputBorderCss};
  ${mediumInputPadding};
`;
type Props = {
  variant?: "outlined";
};
const TextArea: VFC<TextareaHTMLAttributes<HTMLTextAreaElement> & Props> =
  forwardRef(function TextArea(
    {
      variant = "outlined", // TODO: implement more variants
      ...props
    },
    ref
  ) {
    //@ts-ignore
    return <StyledTextarea {...props} ref={ref} />;
  });

export { TextArea };
