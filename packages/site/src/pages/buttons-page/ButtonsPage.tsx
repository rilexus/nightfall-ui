import React from "react";
import { Button } from "@nightfall-ui/components";
import styled from "styled-components";
import { regularNormal2XLCss } from "@nightfall-ui/css";
import { Hr } from "../../components";
import { Center, XStack } from "@nightfall-ui/components";
import { LoadingGradient } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const H2 = styled.h2`
  ${regularNormal2XLCss}
`;

const ButtonsPage = () => {
  return (
    <Center small={80} medium={50}>
      <Title1 type={"primary"} weight={"bold"}>
        Buttons
      </Title1>
      <div>
        <LoadingGradient
          timeout={1000}
          width={"400px"}
          height={"10rem"}
          viewBox="0 0 400 160"
          backgroundColor={"#464646"}
          foregroundColor={"#868686"}
        >
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        </LoadingGradient>
        <H2>Text Buttons</H2>
        <XStack>
          <Button variant={"text"} size={"small"} disabled>
            Click
          </Button>
          <Button variant={"text"} size={"medium"}>
            Click
          </Button>
          <Button variant={"text"} size={"large"} disabled>
            Click
          </Button>
          <Button variant={"text"} size={"extra-large"}>
            Click
          </Button>
        </XStack>
      </div>
      <Hr />
      <div>
        <H2>Oval Buttons</H2>
        <div>
          <XStack>
            <Button variant={"filled"} shape={"oval"} size={"small"}>
              Click
            </Button>
            <Button
              variant={"filled"}
              shape={"oval"}
              size={"medium"}
              disabled={true}
            >
              Click
            </Button>
            <Button variant={"filled"} shape={"oval"} size={"large"}>
              Click
            </Button>
            <Button variant={"filled"} shape={"oval"} size={"extra-large"}>
              Click
            </Button>
          </XStack>
        </div>
      </div>
      <div>
        <H2>Square Buttons</H2>
        <div>
          <XStack>
            <Button variant={"filled"} size={"small"} shape={"square"}>
              Click
            </Button>
            <Button variant={"filled"} size={"medium"} shape={"square"}>
              Click
            </Button>
            <Button variant={"filled"} size={"large"} shape={"square"}>
              Click
            </Button>
            <Button
              variant={"filled"}
              size={"extra-large"}
              shape={"square"}
              disabled={true}
            >
              Click
            </Button>
          </XStack>
        </div>
      </div>
      <div>
        <H2>Outlined Button</H2>
        <XStack>
          <Button variant={"outlined"} size={"small"} shape={"square"}>
            Click
          </Button>
          <Button variant={"outlined"} size={"medium"} shape={"square"}>
            Click
          </Button>
          <Button
            variant={"outlined"}
            size={"large"}
            shape={"square"}
            disabled={true}
          >
            Click
          </Button>
          <Button variant={"outlined"} size={"extra-large"} shape={"square"}>
            Click
          </Button>
        </XStack>
      </div>
      <div>
        <H2>Round Buttons</H2>
        <XStack>
          <Button
            shape={"round"}
            variant={"filled"}
            size={"small"}
            disabled={true}
          >
            OK
          </Button>
          <Button shape={"round"} variant={"filled"} size={"medium"}>
            OK
          </Button>
          <Button shape={"round"} variant={"filled"} size={"large"}>
            OK
          </Button>
          <Button shape={"round"} variant={"filled"} size={"extra-large"}>
            OK
          </Button>
        </XStack>
      </div>
    </Center>
  );
};

export default ButtonsPage;
