import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { BodyRegular } from "./BodyRegular";
import { BodyBold } from "./BodyBold";
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular" | "bold";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Body: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <BodyBold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <BodyRegular {...props} ref={ref} />;
      }
    }
  }
);

export { Body };
