import React, { FC, forwardRef, HTMLAttributes } from "react";
import { Title3Bold } from "./Title3Bold";
import { Title3Regular } from "./Title3Regular";

type Props = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
  weight: "bold" | "regular";
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<any>;

const Title3: FC<Props> = forwardRef(({ weight, ...props }, ref) => {
  switch (weight) {
    case "bold": {
      //TODO: type ref
      //@ts-ignore
      return <Title3Bold {...props} ref={ref} />;
    }
    default: {
      //TODO: type ref
      //@ts-ignore
      return <Title3Regular {...props} ref={ref} />;
    }
  }
});

export { Title3 };
