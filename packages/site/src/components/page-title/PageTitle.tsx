import React, { FC } from "react";
import { LargeTitle } from "@nightfall-ui/typography";

const PageTitle: FC = ({ children }) => {
  return (
    <LargeTitle weight={"regular"} type={"primary"}>
      {children}
    </LargeTitle>
  );
};

export { PageTitle };
