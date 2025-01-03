import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import styled from "styled-components";
import {
  title2BoldPrimaryCss,
  title2BoldQuaternaryCss,
  title2BoldSecondaryCss,
  title2BoldTertiaryCss,
} from "./title2.css";

const StyleTitle2BoldPrimary = styled.div`
  ${title2BoldPrimaryCss};
`;

const Title2BoldPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldPrimary {...props} ref={ref} />;
});

const StyleTitle2BoldSecondary = styled.div`
  ${title2BoldSecondaryCss};
`;

const Title2BoldSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldSecondary {...props} ref={ref} />;
});

const StyleTitle2BoldTertiary = styled.div`
  ${title2BoldTertiaryCss};
`;

const Title2BoldTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldTertiary {...props} ref={ref} />;
});

const StyleTitle2BoldQuaternary = styled.div`
  ${title2BoldQuaternaryCss};
`;

const Title2BoldQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2BoldQuaternary {...props} ref={ref} />;
});

type Title2BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title2Bold: ForwardRefExoticComponent<Title2BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    console.log({ type });
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
