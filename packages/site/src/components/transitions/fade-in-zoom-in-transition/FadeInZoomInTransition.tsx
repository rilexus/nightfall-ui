import React, { FunctionComponent, PropsWithChildren } from "react";
import { FadeInTransition, ZoomInTransition } from "react-transitions-library";

const FadeInZoomInTransition: FunctionComponent<
  PropsWithChildren<{ in: boolean; delay?: number }>
> = ({ children, ...props }) => {
  return (
    <ZoomInTransition {...props} from={0.6} to={1} timeout={200}>
      <FadeInTransition {...props} from={0} to={1} timeout={400}>
        {children}
      </FadeInTransition>
    </ZoomInTransition>
  );
};
export { FadeInZoomInTransition };
