import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  footnoteBoldPrimaryCss,
  footnoteBoldQuaternaryCss,
  footnoteBoldSecondaryCss,
  footnoteBoldTertiaryCss,
} from "./footnote.css";

const StyleFootnoteBoldPrimary = styled.div`
  ${footnoteBoldPrimaryCss}
`;

const FootnoteBoldPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteBoldPrimary {...props} ref={ref} />;
});

const StyleFootnoteBoldSecondary = styled.div`
  ${footnoteBoldSecondaryCss}
`;

const FootnoteBoldSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteBoldSecondary {...props} ref={ref} />;
});

const StyleFootnoteBoldTertiary = styled.div`
  ${footnoteBoldTertiaryCss}
`;

const FootnoteBoldTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteBoldTertiary {...props} ref={ref} />;
});

const StyleFootnoteBoldQuaternary = styled.div`
  ${footnoteBoldQuaternaryCss}
`;

const FootnoteBoldQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteBoldQuaternary {...props} ref={ref} />;
});

type FootnoteBoldProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const FootnoteBold: FC<FootnoteBoldProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteBoldSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteBoldTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteBoldQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteBoldPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { FootnoteBold };
