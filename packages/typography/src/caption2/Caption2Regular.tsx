import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  caption2RegularPrimaryCss,
  caption2RegularQuaternaryCss,
  caption2RegularSecondaryCss,
  caption2RegularTertiaryCss,
} from "./caption2.css";
import IntrinsicElements = React.JSX.IntrinsicElements;

const StyleCaption2RegularPrimary = styled.div`
  ${caption2RegularPrimaryCss}
`;

const Caption2RegularPrimary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularPrimary {...props} ref={ref} />;
});

const StyleCaption2RegularSecondary = styled.div`
  ${caption2RegularSecondaryCss}
`;

const Caption2RegularSecondary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularSecondary {...props} ref={ref} />;
});

const StyleCaption2RegularTertiary = styled.div`
  ${caption2RegularTertiaryCss}
`;

const Caption2RegularTertiary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularTertiary {...props} ref={ref} />;
});

const StyleCaption2RegularQuaternary = styled.div`
  ${caption2RegularQuaternaryCss}
`;

const Caption2RegularQuaternary = forwardRef((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularQuaternary {...props} ref={ref} />;
});

type Caption2RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Caption2Regular: FC<Caption2RegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2RegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2RegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2RegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption2RegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Caption2Regular };
