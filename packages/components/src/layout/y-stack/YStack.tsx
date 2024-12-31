import React, { FC } from "react";
import { Spacing, YSpacer } from "../y-spacer";

const YStack: FC<{ spacing?: Spacing }> = ({
  children,
  spacing = "medium",
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
