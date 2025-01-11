import React from "react";
import { Center } from "@nightfall-ui/components";
import { LargeTitle } from "@nightfall-ui/typography";

const Home = () => {
  return (
    <Center sm={80} md={50}>
      <LargeTitle type={"primary"} weight={"bold"} as={"h1"}>
        Nightfall UI
      </LargeTitle>
    </Center>
  );
};

export { Home };
