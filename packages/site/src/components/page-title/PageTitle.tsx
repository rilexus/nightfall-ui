import React, { FunctionComponent, PropsWithChildren } from "react";
import { LargeTitle } from "@nightfall-ui/typography";

const PageTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <LargeTitle weight={"regular"} type={"primary"}>
      {children}
    </LargeTitle>
  );
};

export { PageTitle };
