import React, { FC, forwardRef, HTMLAttributes } from "react";
import styled, {
  StyledComponent,
  StyledComponentProps,
} from "styled-components";
import {
  footnoteRegularPrimaryCss,
  footnoteRegularQuaternaryCss,
  footnoteRegularSecondaryCss,
  footnoteRegularTertiaryCss,
} from "@nightfall-ui/theme";

const StyleFootnoteRegularPrimary = styled.div`
  ${footnoteRegularPrimaryCss}
`;

const FootnoteRegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteRegularPrimary {...props} ref={ref} />;
});

const StyleFootnoteRegularSecondary = styled.div`
  ${footnoteRegularSecondaryCss}
`;

const FootnoteRegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteRegularSecondary {...props} ref={ref} />;
});

const StyleFootnoteRegularTertiary = styled.div`
  ${footnoteRegularTertiaryCss}
`;

const FootnoteRegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteRegularTertiary {...props} ref={ref} />;
});

const StyleFootnoteRegularQuaternary = styled.div`
  ${footnoteRegularQuaternaryCss}
`;

const FootnoteRegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleFootnoteRegularQuaternary {...props} ref={ref} />;
});

type FootnoteRegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const FootnoteRegular: FC<FootnoteRegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteRegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteRegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteRegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteRegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { FootnoteRegular };
