import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  largeTitleRegularPrimaryCss,
  largeTitleRegularQuaternaryCss,
  largeTitleRegularSecondaryCss,
  largeTitleRegularTertiaryCss,
} from "@nightfall-ui/theme";
import React, { FC, forwardRef, HTMLAttributes } from "react";

const StyleLargeTitleRegularPrimary = styled.div`
  ${largeTitleRegularPrimaryCss}
`;

const LargeTitleRegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleRegularPrimary {...props} ref={ref} />;
});

const StyleLargeTitleRegularSecondary = styled.div`
  ${largeTitleRegularSecondaryCss}
`;

const LargeTitleRegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleRegularSecondary {...props} ref={ref} />;
});

const StyleLargeTitleRegularTertiary = styled.div`
  ${largeTitleRegularTertiaryCss}
`;

const LargeTitleRegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleRegularTertiary {...props} ref={ref} />;
});

const StyleLargeTitleRegularQuaternary = styled.div`
  ${largeTitleRegularQuaternaryCss}
`;

const LargeTitleRegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleLargeTitleRegularQuaternary {...props} ref={ref} />;
});

type LargeTitleRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const LargeTitleRegular: FC<LargeTitleRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { LargeTitleRegular };
