import React, { FunctionComponent, PropsWithChildren } from "react";
import { XSpacer } from "../x-spacer";
import { Spacing } from "@nightfall-ui/themes";

const XStack: FunctionComponent<
  PropsWithChildren<{ spacing?: keyof Spacing }>
> = ({ children, spacing = "12" }) => {
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
