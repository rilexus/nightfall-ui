import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { LargeTitleBold } from "./LargeTitleBold";
import { LargeTitleRegular } from "./LargeTitleRegular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "bold" | "regular";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const LargeTitle: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleBold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <LargeTitleRegular {...props} ref={ref} />;
      }
    }
  }
);

export default LargeTitle;
