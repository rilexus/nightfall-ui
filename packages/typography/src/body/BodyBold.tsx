import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  bodyBoldPrimaryCss,
  bodyBoldQuaternaryCss,
  bodyBoldSecondaryCss,
  bodyBoldTertiaryCss,
} from "./body.css";
import IntrinsicElements = React.JSX.IntrinsicElements;

const StyleBodyBoldPrimary = styled.div`
  ${bodyBoldPrimaryCss}
`;

const BodyBoldPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldPrimary {...props} ref={ref} />;
});

const StyleBodyBoldSecondary = styled.div`
  ${bodyBoldSecondaryCss}
`;

const BodyBoldSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldSecondary {...props} ref={ref} />;
});

const StyleBodyBoldTertiary = styled.div`
  ${bodyBoldTertiaryCss}
`;

const BodyBoldTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldTertiary {...props} ref={ref} />;
});

const StyleBodyBoldQuaternary = styled.div`
  ${bodyBoldQuaternaryCss}
`;

const BodyBoldQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleBodyBoldQuaternary {...props} ref={ref} />;
});

type BodyBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof IntrinsicElements;
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
