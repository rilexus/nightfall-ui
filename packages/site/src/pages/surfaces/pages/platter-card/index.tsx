import React from "react";
import {
  Center,
  Flex,
  ThickPlatterCard,
  ThinPlatterCard,
  UltraThinPlatterCard,
  YStack,
} from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const PlatterCardPage = () => {
  return (
    <Center sm={80} md={50}>
      <Flex>
        <Title1 type={"tertiary"} weight={"regular"}>
          Surfaces/
        </Title1>
        <Title1 type={"primary"} weight={"bold"}>
          PlatterCard
        </Title1>
      </Flex>
      <YStack spacing={"300"}>
        <div
          style={{
            position: "relative",
          }}
        >
          <UltraThinPlatterCard
            style={{
              height: "100%",
              position: "absolute",
            }}
          >
            UltraThinPlatterCard
          </UltraThinPlatterCard>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            aut delectus distinctio ea eaque enim, error illum impedit non,
            optio quaerat quo voluptatum. Aperiam aut debitis distinctio
            inventore minus ratione!
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <ThinPlatterCard
            style={{
              height: "100%",
              position: "absolute",
            }}
          >
            ThinPlatterCard
          </ThinPlatterCard>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            aut delectus distinctio ea eaque enim, error illum impedit non,
            optio quaerat quo voluptatum. Aperiam aut debitis distinctio
            inventore minus ratione!
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <ThickPlatterCard
            style={{
              height: "100%",
              position: "absolute",
            }}
          >
            ThickPlatterCard
          </ThickPlatterCard>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, optio
            porro! Accusamus, aliquam assumenda consectetur dolorum eum
            explicabo ipsa iure laborum nihil quidem? Laborum, quam, sequi?
            Dignissimos ea eveniet laudantium!
          </div>
        </div>
      </YStack>
    </Center>
  );
};

export { PlatterCardPage };
