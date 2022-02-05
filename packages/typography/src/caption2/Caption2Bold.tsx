import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  caption2BoldPrimaryCss,
  caption2BoldQuaternaryCss,
  caption2BoldSecondaryCss,
  caption2BoldTertiaryCss,
} from "@nightfall-ui/theme";

const StyleCaption2BoldPrimary = styled.div`
  ${caption2BoldPrimaryCss}
`;

const Caption2BoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2BoldPrimary {...props} ref={ref} />;
});

const StyleCaption2BoldSecondary = styled.div`
  ${caption2BoldSecondaryCss}
`;

const Caption2BoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2BoldSecondary {...props} ref={ref} />;
});

const StyleCaption2BoldTertiary = styled.div`
  ${caption2BoldTertiaryCss}
`;

const Caption2BoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2BoldTertiary {...props} ref={ref} />;
});

const StyleCaption2BoldQuaternary = styled.div`
  ${caption2BoldQuaternaryCss}
`;

const Caption2BoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2BoldQuaternary {...props} ref={ref} />;
});

type Caption2BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Caption2Bold: FC<Caption2BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2BoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2BoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2BoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption2BoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Caption2Bold };
