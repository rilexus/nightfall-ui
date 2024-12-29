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
  title3BoldPrimaryCss,
  title3BoldQuaternaryCss,
  title3BoldSecondaryCss,
  title3BoldTertiaryCss,
} from "./title3.css";

const StyleTitle3BoldPrimary = styled.div`
  ${title3BoldPrimaryCss}
`;

const Title3BoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle3BoldPrimary {...props} ref={ref} />;
});

const StyleTitle3BoldSecondary = styled.div`
  ${title3BoldSecondaryCss}
`;

const Title3BoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle3BoldSecondary {...props} ref={ref} />;
});

const StyleTitle3BoldTertiary = styled.div`
  ${title3BoldTertiaryCss}
`;

const Title3BoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle3BoldTertiary {...props} ref={ref} />;
});

const StyleTitle3BoldQuaternary = styled.div`
  ${title3BoldQuaternaryCss}
`;

const Title3BoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle3BoldQuaternary {...props} ref={ref} />;
});

type Title3BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title3Bold: ForwardRefExoticComponent<Title3BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title3BoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Title3BoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Title3BoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title3BoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title3Bold };
