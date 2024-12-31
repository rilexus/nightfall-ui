import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  caption1RegularPrimaryCss,
  caption1RegularQuaternaryCss,
  caption1RegularSecondaryCss,
  caption1RegularTertiaryCss,
} from "./caption1.css";

const StyleCaption1RegularPrimary = styled.div`
  ${caption1RegularPrimaryCss}
`;

const Caption1RegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1RegularPrimary {...props} ref={ref} />;
});

const StyleCaption1RegularSecondary = styled.div`
  ${caption1RegularSecondaryCss}
`;

const Caption1RegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1RegularSecondary {...props} ref={ref} />;
});

const StyleCaption1RegularTertiary = styled.div`
  ${caption1RegularTertiaryCss}
`;

const Caption1RegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1RegularTertiary {...props} ref={ref} />;
});

const StyleCaption1RegularQuaternary = styled.div`
  ${caption1RegularQuaternaryCss}
`;

const Caption1RegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption1RegularQuaternary {...props} ref={ref} />;
});

type Caption1RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Caption1Regular: FC<Caption1RegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1RegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1RegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1RegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption1RegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Caption1Regular };
