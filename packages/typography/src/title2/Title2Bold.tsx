import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  title1BoldPrimaryCss,
  title1BoldQuaternaryCss,
  title1BoldSecondaryCss,
  title1BoldTertiaryCss,
} from "@nightfall-ui/theme";

const StyleTitle2BoldPrimary = styled.div`
  ${title1BoldPrimaryCss}
`;

const Title2BoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldPrimary {...props} ref={ref} />;
});

const StyleTitle2BoldSecondary = styled.div`
  ${title1BoldSecondaryCss}
`;

const Title2BoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldSecondary {...props} ref={ref} />;
});

const StyleTitle2BoldTertiary = styled.div`
  ${title1BoldTertiaryCss}
`;

const Title2BoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldTertiary {...props} ref={ref} />;
});

const StyleTitle2BoldQuaternary = styled.div`
  ${title1BoldQuaternaryCss}
`;

const Title2BoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldQuaternary {...props} ref={ref} />;
});

type Title2BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title2Bold: ForwardRefExoticComponent<Title2BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2BoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2BoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2BoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title2BoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title2Bold };
