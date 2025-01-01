import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  calloutRegularPrimaryCss,
  calloutRegularQuaternaryCss,
  calloutRegularSecondaryCss,
  calloutRegularTertiaryCss,
} from "./callout.css";
import IntrinsicElements = React.JSX.IntrinsicElements;

const StyleCalloutRegularPrimary = styled.div`
  ${calloutRegularPrimaryCss}
`;

const CalloutRegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutRegularPrimary {...props} ref={ref} />;
});

const StyleCalloutRegularSecondary = styled.div`
  ${calloutRegularSecondaryCss}
`;

const CalloutRegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutRegularSecondary {...props} ref={ref} />;
});

const StyleCalloutRegularTertiary = styled.div`
  ${calloutRegularTertiaryCss}
`;

const CalloutRegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutRegularTertiary {...props} ref={ref} />;
});

const StyleCalloutRegularQuaternary = styled.div`
  ${calloutRegularQuaternaryCss}
`;

const CalloutRegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCalloutRegularQuaternary {...props} ref={ref} />;
});

type CalloutRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const CalloutRegular: FC<CalloutRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <CalloutRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { CalloutRegular };
