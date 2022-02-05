import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  calloutBoldPrimaryCss,
  calloutBoldQuaternaryCss,
  calloutBoldSecondaryCss,
  calloutBoldTertiaryCss,
} from "@nightfall-ui/theme";

const StyleCalloutBoldPrimary = styled.div`
  ${calloutBoldPrimaryCss}
`;

const CalloutBoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutBoldPrimary {...props} ref={ref} />;
});

const StyleCalloutBoldSecondary = styled.div`
  ${calloutBoldSecondaryCss}
`;

const CalloutBoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutBoldSecondary {...props} ref={ref} />;
});

const StyleCalloutBoldTertiary = styled.div`
  ${calloutBoldTertiaryCss}
`;

const CalloutBoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutBoldTertiary {...props} ref={ref} />;
});

const StyleCalloutBoldQuaternary = styled.div`
  ${calloutBoldQuaternaryCss}
`;

const CalloutBoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutBoldQuaternary {...props} ref={ref} />;
});

type CalloutBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const CalloutBold: FC<CalloutBoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutBoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutBoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutBoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <CalloutBoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { CalloutBold };
