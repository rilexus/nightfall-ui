import React, { FunctionComponent, PropsWithChildren } from "react";
import { FadeInTransition, ZoomInTransition } from "react-transitions-library";

const OptionMountTransition: FunctionComponent<
  PropsWithChildren<{ delay: number }>
> = ({ delay, children, ...props }) => {
  return (
    <FadeInTransition
      {...props}
      in
      from={0}
      to={1}
      timeout={1000}
      delay={delay}
    >
      <ZoomInTransition
        {...props}
        timeout={200}
        delay={delay}
        in
        from={0.8}
        to={1}
      >
        {children}
      </ZoomInTransition>
    </FadeInTransition>
  );
};

export { OptionMountTransition };
