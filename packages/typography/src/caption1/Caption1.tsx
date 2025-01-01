import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { Caption1Regular } from "./Caption1Regular";
import { Caption1Bold } from "./Caption1Bold";
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular" | "bold";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Caption1: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <Caption1Bold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption1Regular {...props} ref={ref} />;
      }
    }
  }
);

export { Caption1 };
