import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  bodyBoldPrimaryCss,
  bodyBoldQuaternaryCss,
  bodyBoldSecondaryCss,
  bodyBoldTertiaryCss,
} from "@nightfall-ui/theme";

const StyleBodyBoldPrimary = styled.div`
  ${bodyBoldPrimaryCss}
`;

const BodyBoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldPrimary {...props} ref={ref} />;
});

const StyleBodyBoldSecondary = styled.div`
  ${bodyBoldSecondaryCss}
`;

const BodyBoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldSecondary {...props} ref={ref} />;
});

const StyleBodyBoldTertiary = styled.div`
  ${bodyBoldTertiaryCss}
`;

const BodyBoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldTertiary {...props} ref={ref} />;
});

const StyleBodyBoldQuaternary = styled.div`
  ${bodyBoldQuaternaryCss}
`;

const BodyBoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldQuaternary {...props} ref={ref} />;
});

type BodyBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const BodyBold: FC<BodyBoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyBoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyBoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyBoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <BodyBoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { BodyBold };
