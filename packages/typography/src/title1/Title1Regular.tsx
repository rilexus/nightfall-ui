import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  title1RegularPrimaryCss,
  title1RegularQuaternaryCss,
  title1RegularSecondaryCss,
  title1RegularTertiaryCss,
} from "./title1.css";

const StyleTitle1RegularPrimary = styled.div`
  ${title1RegularPrimaryCss}
`;

const Title1RegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularPrimary {...props} ref={ref} />;
});

const StyleTitle1RegularSecondary = styled.div`
  ${title1RegularSecondaryCss}
`;

const Title1RegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularSecondary {...props} ref={ref} />;
});

const StyleTitle1RegularTertiary = styled.div`
  ${title1RegularTertiaryCss}
`;

const Title1RegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularTertiary {...props} ref={ref} />;
});

const StyleTitle1RegularQuaternary = styled.div`
  ${title1RegularQuaternaryCss}
`;

const Title1RegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularQuaternary {...props} ref={ref} />;
});

type Title1RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title1Regular: FC<Title1RegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1RegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1RegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1RegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title1RegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title1Regular };
