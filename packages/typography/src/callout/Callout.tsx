import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { CalloutRegular } from "./CalloutRegular";
import { CalloutBold } from "./CalloutBold";
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular" | "bold";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Callout: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <CalloutBold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <CalloutRegular {...props} ref={ref} />;
      }
    }
  }
);

export { Callout };
