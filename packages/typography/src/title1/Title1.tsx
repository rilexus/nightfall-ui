import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { Title1Bold } from "./Title1Bold";
import { Title1Regular } from "./Title1Regular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "bold" | "regular";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title1: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <Title1Bold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title1Regular {...props} ref={ref} />;
      }
    }
  }
);

export { Title1 };
