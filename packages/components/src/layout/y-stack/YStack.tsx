import React, { FunctionComponent, PropsWithChildren } from "react";
import { Spacing, YSpacer } from "../y-spacer";

const YStack: FunctionComponent<PropsWithChildren<{ spacing?: Spacing }>> = ({
  children,
  spacing = "12",
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return <YSpacer spacing={spacing}>{child}</YSpacer>;
      })}
    </div>
  );
};

export { YStack };
