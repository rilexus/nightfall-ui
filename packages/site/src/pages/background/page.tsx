import React from "react";
import { Background, Center, Flex } from "@nightfall-ui/components";
import { LargeTitle } from "@nightfall-ui/typography";

const BackgroundPage = () => {
  return (
    <Center sm={80} md={50}>
      <Flex>
        <LargeTitle type={"tertiary"} weight={"regular"}>
          Backgrounds/
        </LargeTitle>
        <LargeTitle type={"primary"} weight={"bold"}>
          Normal
        </LargeTitle>
      </Flex>
      <Background />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aut
      cum deleniti ducimus eligendi eos expedita ipsam itaque quisquam quos
      reiciendis voluptate, voluptatum? Assumenda esse ex explicabo nesciunt
      vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque
      blanditiis cumque delectus dicta dolorem ducimus eligendi facere harum
      inventore, iure, libero minus quaerat quisquam quos rem sed sequi
      voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Alias aspernatur consectetur consequatur cum dolor doloremque est,
      expedita iure laboriosam magnam minus nisi quidem quisquam repellat
      tempore ullam ut vitae voluptates.
    </Center>
  );
};

export default BackgroundPage;
