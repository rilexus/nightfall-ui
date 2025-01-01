import styled from "styled-components";
import {
  subHeadlineRegularPrimaryCss,
  subHeadlineRegularQuaternaryCss,
  subHeadlineRegularSecondaryCss,
  subHeadlineRegularTertiaryCss,
} from "./subtitle.css";
import React, { FC, forwardRef, HTMLAttributes } from "react";

const StyleSubHeadlineRegularPrimary = styled.div`
  ${subHeadlineRegularPrimaryCss}
`;

const SubHeadlineRegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineRegularPrimary {...props} ref={ref} />;
});

const StyleSubHeadlineRegularSecondary = styled.div`
  ${subHeadlineRegularSecondaryCss}
`;

const SubHeadlineRegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineRegularSecondary {...props} ref={ref} />;
});

const StyleSubHeadlineRegularTertiary = styled.div`
  ${subHeadlineRegularTertiaryCss}
`;

const SubHeadlineRegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineRegularTertiary {...props} ref={ref} />;
});

const StyleSubHeadlineRegularQuaternary = styled.div`
  ${subHeadlineRegularQuaternaryCss}
`;

const SubHeadlineRegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineRegularQuaternary {...props} ref={ref} />;
});

type SubHeadlineRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const SubHeadlineRegular: FC<SubHeadlineRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { SubHeadlineRegular };
