import React from "react";
import {
  TextExtraLargeButton,
  TextLargeButton,
  TextMediumButton,
  Button,
  TextSmallButton,
} from "@nightfall-ui/buttons";
import styled from "styled-components";
import { laptop, regularNormal2XLCss } from "@nightfall-ui/css";
import { Hr } from "../../components";
import { XStack } from "@nightfall-ui/layout";
import { LoadingGradient } from "@nightfall-ui/surfaces";

const H2 = styled.h2`
  ${regularNormal2XLCss}
`;

const Div = styled.div`
  color: red;
  ${laptop`
    color: blue;
  `}
`;

const ButtonsPage = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <Div>some</Div>
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
          <TextSmallButton>Click</TextSmallButton>
          <TextMediumButton>Click</TextMediumButton>
          <TextLargeButton>Click</TextLargeButton>
          <TextExtraLargeButton>Click</TextExtraLargeButton>
        </XStack>
      </div>
      <Hr />
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
            <Button variant={"filled"} size={"extra-large"} shape={"square"}>
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
          <Button variant={"outlined"} size={"large"} shape={"square"}>
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
          <Button shape={"round"} variant={"filled"} size={"small"}>
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
    </div>
  );
};

export { ButtonsPage };
