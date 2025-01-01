import React, { FunctionComponent, PropsWithChildren } from "react";
import { Spacing } from "../y-spacer";
import { XSpacer } from "../x-spacer";

const XStack: FunctionComponent<PropsWithChildren<{ spacing?: Spacing }>> = ({
  children,
  spacing = "medium",
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {React.Children.map(children, (child) => {
        return <XSpacer spacing={spacing}>{child}</XSpacer>;
      })}
    </div>
  );
};

export { XStack };
