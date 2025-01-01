import React, {
  forwardRef,
  FunctionComponent,
  PropsWithChildren,
  TextareaHTMLAttributes,
} from "react";
import styled from "styled-components";
import {
  inputBorderRadius,
  inputCss,
  mediumInputPadding,
  outlinedInputBackgroundCss,
  outlinedInputBorderCss,
} from "../css";

const StyledTextarea = styled.textarea`
  ${outlinedInputBackgroundCss};
  ${inputBorderRadius};
  ${outlinedInputBorderCss};
  ${mediumInputPadding};
  ${inputCss};
`;
type Props = {
  variant?: "outlined";
  invalid?: boolean;
};
const TextArea: FunctionComponent<
  PropsWithChildren<TextareaHTMLAttributes<HTMLTextAreaElement> & Props>
> = forwardRef(function TextArea(
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
