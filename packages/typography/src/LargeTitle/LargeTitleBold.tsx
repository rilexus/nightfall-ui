import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  largeTitleBoldPrimaryCss,
  largeTitleBoldQuaternaryCss,
  largeTitleBoldSecondaryCss,
  largeTitleBoldTertiaryCss,
} from "./largeTitle.css";
import React, { FC, forwardRef, HTMLAttributes } from "react";

const StyleLargeTitleBoldPrimary = styled.div`
  ${largeTitleBoldPrimaryCss}
`;

const LargeTitleBoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleBoldPrimary {...props} ref={ref} />;
});

const StyleLargeTitleBoldSecondary = styled.div`
  ${largeTitleBoldSecondaryCss}
`;

const LargeTitleBoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleBoldSecondary {...props} ref={ref} />;
});

const StyleLargeTitleBoldTertiary = styled.div`
  ${largeTitleBoldTertiaryCss}
`;

const LargeTitleBoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleBoldTertiary {...props} ref={ref} />;
});

const StyleLargeTitleBoldQuaternary = styled.div`
  ${largeTitleBoldQuaternaryCss}
`;

const LargeTitleBoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleBoldQuaternary {...props} ref={ref} />;
});

type LargeTitleBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const LargeTitleBold: FC<LargeTitleBoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleBoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleBoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleBoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleBoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { LargeTitleBold };
