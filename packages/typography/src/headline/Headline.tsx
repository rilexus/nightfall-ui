import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { HeadlineRegular } from "./HeadlineRegular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular";
  as?: keyof React.JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Headline: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      default: {
        //TODO: type ref
        //@ts-ignore
        return <HeadlineRegular {...props} ref={ref} />;
      }
    }
  }
);

export { Headline };
