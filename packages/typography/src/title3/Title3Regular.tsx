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
  title3RegularPrimaryCss,
  title3RegularQuaternaryCss,
  title3RegularSecondaryCss,
  title3RegularTertiaryCss,
} from "@nightfall-ui/theme";

const StyleTitle1RegularPrimary = styled.div`
  ${title3RegularPrimaryCss}
`;

const Title1RegularPrimary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularPrimary {...props} ref={ref} />;
});

const StyleTitle1RegularSecondary = styled.div`
  ${title3RegularSecondaryCss}
`;

const Title1RegularSecondary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularSecondary {...props} ref={ref} />;
});

const StyleTitle1RegularTertiary = styled.div`
  ${title3RegularTertiaryCss}
`;

const Title1RegularTertiary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularTertiary {...props} ref={ref} />;
});

const StyleTitle1RegularQuaternary = styled.div`
  ${title3RegularQuaternaryCss}
`;

const Title1RegularQuaternary = forwardRef<
  StyledComponent<"div", any>,
  StyledComponentProps<"div", any, any, any>
>((props, ref) => {
  //TODO: type ref
  //@ts-ignore
  return <StyleTitle1RegularQuaternary {...props} ref={ref} />;
});

type Title1RegularProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title3Regular: ForwardRefExoticComponent<Title1RegularProps> = forwardRef(
  ({ type = "primary", ...props }, ref) => {
    switch (type) {
      case "secondary": {
        //TODO: type ref
        //@ts-ignore
        return <Title1RegularSecondary {...props} ref={ref} />;
      }
      case "tertiary": {
        //@ts-ignore
        return <Title1RegularTertiary {...props} ref={ref} />;
      }
      case "quaternary": {
        //@ts-ignore
        return <Title1RegularQuaternary {...props} ref={ref} />;
      }
      default: {
        //@ts-ignore
        return <Title1RegularPrimary {...props} ref={ref} />;
      }
    }
  }
);

export { Title3Regular };
