import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { SubHeadlineBold } from "./SubHeadlineBold";
import { SubHeadlineRegular } from "./SubHeadlineRegular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "bold" | "regular";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const SubHeadline: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineBold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <SubHeadlineRegular {...props} ref={ref} />;
      }
    }
  }
);

export { SubHeadline };
