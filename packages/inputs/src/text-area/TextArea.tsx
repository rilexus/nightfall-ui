import React, { TextareaHTMLAttributes, VFC } from "react";
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
const TextArea: VFC<TextareaHTMLAttributes<HTMLTextAreaElement> & Props> = ({
  variant = "outlined", // TODO: implement more variants
  ...props
}) => {
  return <StyledTextarea {...props} />;
};

export { TextArea };
