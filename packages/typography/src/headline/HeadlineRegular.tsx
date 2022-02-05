import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  headlineBoldPrimaryCss,
  headlineBoldQuaternaryCss,
  headlineBoldSecondaryCss,
  headlineBoldTertiaryCss,
} from "@nightfall-ui/theme";

const StyleHeadlineRegularPrimary = styled.div`
  ${headlineBoldPrimaryCss}
`;

const HeadlineRegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleHeadlineRegularPrimary {...props} ref={ref} />;
});

const StyleHeadlineRegularSecondary = styled.div`
  ${headlineBoldSecondaryCss}
`;

const HeadlineRegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleHeadlineRegularSecondary {...props} ref={ref} />;
});

const StyleHeadlineRegularTertiary = styled.div`
  ${headlineBoldTertiaryCss}
`;

const HeadlineRegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleHeadlineRegularTertiary {...props} ref={ref} />;
});

const StyleHeadlineRegularQuaternary = styled.div`
  ${headlineBoldQuaternaryCss}
`;

const HeadlineRegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleHeadlineRegularQuaternary {...props} ref={ref} />;
});

type HeadlineRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const HeadlineRegular: FC<HeadlineRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <HeadlineRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <HeadlineRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <HeadlineRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <HeadlineRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { HeadlineRegular };
