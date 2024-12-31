import styled from "styled-components";
import {
  title1BoldPrimaryCss,
  title1BoldQuaternaryCss,
  title1BoldSecondaryCss,
  title1BoldTertiaryCss,
} from "./title1.css";
import React, { FC, forwardRef, HTMLAttributes } from "react";

const StyleTitle1BoldPrimary = styled.div`
  ${title1BoldPrimaryCss}
`;

const Title1BoldPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1BoldPrimary {...props} ref={ref} />;
});

const StyleTitle1BoldSecondary = styled.div`
  ${title1BoldSecondaryCss}
`;

const Title1BoldSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1BoldSecondary {...props} ref={ref} />;
});

const StyleTitle1BoldTertiary = styled.div`
  ${title1BoldTertiaryCss}
`;

const Title1BoldTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1BoldTertiary {...props} ref={ref} />;
});

const StyleTitle1BoldQuaternary = styled.div`
  ${title1BoldQuaternaryCss}
`;

const Title1BoldQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1BoldQuaternary {...props} ref={ref} />;
});

type Title1BoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title1Bold: FC<Title1BoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1BoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1BoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1BoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title1BoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title1Bold };
