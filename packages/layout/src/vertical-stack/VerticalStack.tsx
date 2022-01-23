import React, { FC } from "react";
import { Spacing, VerticalSpacer } from "../vertical-spacer";

const VerticalStack: FC<{ spacing?: Spacing }> = ({
  children,
  spacing = "medium",
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return <VerticalSpacer spacing={spacing}>{child}</VerticalSpacer>;
      })}
    </div>
  );
};

export { VerticalStack };
