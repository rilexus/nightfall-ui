import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  caption1RegularPrimaryCss,
  caption1RegularQuaternaryCss,
  caption1RegularSecondaryCss,
  caption1RegularTertiaryCss,
} from "@nightfall-ui/theme";

const StyleCaption2RegularPrimary = styled.div`
  ${caption1RegularPrimaryCss}
`;

const Caption2RegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularPrimary {...props} ref={ref} />;
});

const StyleCaption2RegularSecondary = styled.div`
  ${caption1RegularSecondaryCss}
`;

const Caption2RegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularSecondary {...props} ref={ref} />;
});

const StyleCaption2RegularTertiary = styled.div`
  ${caption1RegularTertiaryCss}
`;

const Caption2RegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularTertiary {...props} ref={ref} />;
});

const StyleCaption2RegularQuaternary = styled.div`
  ${caption1RegularQuaternaryCss}
`;

const Caption2RegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleCaption2RegularQuaternary {...props} ref={ref} />;
});

type Caption2RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
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
