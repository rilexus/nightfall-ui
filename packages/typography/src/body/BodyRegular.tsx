import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  bodyRegularPrimaryCss,
  bodyRegularQuaternaryCss,
  bodyRegularSecondaryCss,
  bodyRegularTertiaryCss,
} from "@nightfall-ui/theme";

const StyleBodyRegularPrimary = styled.div`
  ${bodyRegularPrimaryCss}
`;

const BodyRegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyRegularPrimary {...props} ref={ref} />;
});

const StyleBodyRegularSecondary = styled.div`
  ${bodyRegularSecondaryCss}
`;

const BodyRegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyRegularSecondary {...props} ref={ref} />;
});

const StyleBodyRegularTertiary = styled.div`
  ${bodyRegularTertiaryCss}
`;

const BodyRegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyRegularTertiary {...props} ref={ref} />;
});

const StyleBodyRegularQuaternary = styled.div`
  ${bodyRegularQuaternaryCss}
`;

const BodyRegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyRegularQuaternary {...props} ref={ref} />;
});

type BodyRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const BodyRegular: FC<BodyRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <BodyRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <BodyRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { BodyRegular };
