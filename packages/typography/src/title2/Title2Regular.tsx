import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import styled from "styled-components";
import {
  title2RegularPrimaryCss,
  title2RegularQuaternaryCss,
  title2RegularSecondaryCss,
  title2RegularTertiaryCss,
} from "./title2.css";

const StyleTitle2RegularPrimary = styled.div`
  ${title2RegularPrimaryCss}
`;

const Title2RegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2RegularPrimary {...props} ref={ref} />;
});

const StyleTitle2RegularSecondary = styled.div`
  ${title2RegularSecondaryCss}
`;

const Title2RegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2RegularSecondary {...props} ref={ref} />;
});

const StyleTitle2RegularTertiary = styled.div`
  ${title2RegularTertiaryCss}
`;

const Title2RegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2RegularTertiary {...props} ref={ref} />;
});

const StyleTitle2RegularQuaternary = styled.div`
  ${title2RegularQuaternaryCss}
`;

const Title2RegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle2RegularQuaternary {...props} ref={ref} />;
});

type Title2RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title2Regular: ForwardRefExoticComponent<Title2RegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2RegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2RegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Title2RegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title2RegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title2Regular };
