import React, { FunctionComponent, PropsWithChildren } from "react";
import { YSpacer } from "../y-spacer";
import { Spacing } from "@nightfall-ui/themes";

const YStack: FunctionComponent<
  PropsWithChildren<{ spacing?: keyof Spacing }>
> = ({ children, spacing = "12" }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return <YSpacer spacing={spacing}>{child}</YSpacer>;
      })}
    </div>
  );
};

export { YStack };
