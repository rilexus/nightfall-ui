import React from "react";
import { Center } from "@nightfall-ui/layout";
import { LargeTitle } from "@nightfall-ui/typography";

const Home = () => {
  return (
    <Center small={80} medium={50}>
      <LargeTitle type={"primary"} weight={"bold"} as={"h1"}>
        Nightfall UI
      </LargeTitle>
    </Center>
  );
};

export { Home };
