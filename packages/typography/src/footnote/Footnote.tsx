import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { FootnoteRegular } from "./FootnoteRegular";
import { FootnoteBold } from "./FootnoteBold";
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "regular" | "bold";
  as?: keyof IntrinsicElements;
} & HTMLAttributes<any>;

const Footnote: ForwardRefExoticComponent<Props> = forwardRef(
  ({ weight, ...props }, ref) => {
    switch (weight) {
      case "bold": {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteBold {...props} ref={ref} />;
      }
      default: {
        //TODO: type ref
        //@ts-ignore
        return <FootnoteRegular {...props} ref={ref} />;
      }
    }
  }
);

export { Footnote };
