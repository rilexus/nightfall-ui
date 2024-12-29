import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  caption1BoldPrimaryCss,
  caption1BoldQuaternaryCss,
  caption1BoldSecondaryCss,
  caption1BoldTertiaryCss,
} from "./caption1.css";

const StyleCaption1BoldPrimary = styled.div`
  ${caption1BoldPrimaryCss}
`;

const Caption1BoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1BoldPrimary {...props} ref={ref} />;
});

const StyleCaption1BoldSecondary = styled.div`
  ${caption1BoldSecondaryCss}
`;

const Caption1BoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1BoldSecondary {...props} ref={ref} />;
});

const StyleCaption1BoldTertiary = styled.div`
  ${caption1BoldTertiaryCss}
`;

const Caption1BoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1BoldTertiary {...props} ref={ref} />;
});

const StyleCaption1BoldQuaternary = styled.div`
  ${caption1BoldQuaternaryCss}
`;

const Caption1BoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1BoldQuaternary {...props} ref={ref} />;
});

type Caption1BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Caption1Bold: FC<Caption1BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1BoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1BoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1BoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption1BoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Caption1Bold };
