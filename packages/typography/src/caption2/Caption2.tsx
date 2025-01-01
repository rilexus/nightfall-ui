import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { Caption2Regular } from "./Caption2Regular";
import { Caption2Bold } from "./Caption2Bold";
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular" | "bold";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Caption2: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <Caption2Bold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <Caption2Regular {...props} ref={ref} />;
      }
    }
  }
);

export { Caption2 };
