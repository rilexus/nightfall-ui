import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { Title2Bold } from "./Title2Bold";
import { Title2Regular } from "./Title2Regular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "bold" | "regular";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title2: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <Title2Bold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Title2Regular {...props} ref={ref} />;
      }
    }
  }
);

export { Title2 };
