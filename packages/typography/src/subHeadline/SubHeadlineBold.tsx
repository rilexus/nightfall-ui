import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  subHeadlineBoldPrimaryCss,
  subHeadlineBoldQuaternaryCss,
  subHeadlineBoldSecondaryCss,
  subHeadlineBoldTertiaryCss,
} from "./subtitle.css";

const StyleSubHeadlineBoldPrimary = styled.div`
  ${subHeadlineBoldPrimaryCss}
`;

const SubHeadlineBoldPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineBoldPrimary {...props} ref={ref} />;
});

const StyleSubHeadlineBoldSecondary = styled.div`
  ${subHeadlineBoldSecondaryCss}
`;

const SubHeadlineBoldSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineBoldSecondary {...props} ref={ref} />;
});

const StyleSubHeadlineBoldTertiary = styled.div`
  ${subHeadlineBoldTertiaryCss}
`;

const SubHeadlineBoldTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineBoldTertiary {...props} ref={ref} />;
});

const StyleSubHeadlineBoldQuaternary = styled.div`
  ${subHeadlineBoldQuaternaryCss}
`;

const SubHeadlineBoldQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleSubHeadlineBoldQuaternary {...props} ref={ref} />;
});

type SubHeadlineBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const SubHeadlineBold: ForwardRefExoticComponent<SubHeadlineBoldProps> =
  forwardRef(({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineBoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineBoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineBoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineBoldPrimary {...props} ref={ref} />;
      }
    }
  });

export { SubHeadlineBold };
