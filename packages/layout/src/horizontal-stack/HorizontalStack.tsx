import React, { FC } from "react";
import { Spacing } from "../vertical-spacer";
import { HorizontalSpacer } from "../horizontal-spacer";

const HorizontalStack: FC<{ spacing?: Spacing }> = ({
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
        return <HorizontalSpacer spacing={spacing}>{child}</HorizontalSpacer>;
      })}
    </div>
  );
};

export { HorizontalStack };
