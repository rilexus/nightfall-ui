import React from "react";
import { Center, Flex, Platter, YStack } from "@nightfall-ui/components";
import { LargeTitle, Title2 } from "@nightfall-ui/typography";

const PlatterPage = () => {
  return (
    <Center sm={80} md={50}>
      <Flex>
        <LargeTitle type={"tertiary"} weight={"regular"}>
          Effects/
        </LargeTitle>
        <LargeTitle type={"primary"} weight={"bold"}>
          Platter
        </LargeTitle>
      </Flex>

      <YStack spacing={"300"}>
        <div
          style={{
            position: "relative",
          }}
        >
          <Title2 type={"primary"} weight={"regular"}>
            Ultra Thin
          </Title2>
          <Platter
            type={"ultra-thin"}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
            }}
          ></Platter>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aut culpa dolorem, doloremque dolores error ex exercitationem fugiat
            ipsa laudantium neque praesentium provident quia quidem quos
            repellat similique vero voluptatibus.
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <Title2 type={"primary"} weight={"regular"}>
            Thin
          </Title2>
          <Platter
            type={"thin"}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
            }}
          ></Platter>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aut culpa dolorem, doloremque dolores error ex exercitationem fugiat
            ipsa laudantium neque praesentium provident quia quidem quos
            repellat similique vero voluptatibus.
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <Title2 type={"primary"} weight={"regular"}>
            Regular
          </Title2>
          <Platter
            type={"regular"}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
            }}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aut culpa dolorem, doloremque dolores error ex exercitationem fugiat
            ipsa laudantium neque praesentium provident quia quidem quos
            repellat similique vero voluptatibus.
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <Title2 type={"primary"} weight={"regular"}>
            Thick
          </Title2>
          <Platter
            type={"thick"}
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
            }}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aut culpa dolorem, doloremque dolores error ex exercitationem fugiat
            ipsa laudantium neque praesentium provident quia quidem quos
            repellat similique vero voluptatibus.
          </div>
        </div>
      </YStack>
    </Center>
  );
};

export default PlatterPage;
