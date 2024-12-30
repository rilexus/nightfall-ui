import React from "react";
import { Button } from "@nightfall-ui/components";
import styled from "styled-components";
import { regularNormal2XLCss } from "@nightfall-ui/css";
import { Hr, PageTitle } from "../../components";
import { Center, XStack } from "@nightfall-ui/components";
import { LoadingGradient } from "@nightfall-ui/components";

const H2 = styled.h2`
  ${regularNormal2XLCss}
`;

const ButtonsPage = () => {
  return (
    <Center small={80} medium={50}>
      <PageTitle>Buttons</PageTitle>
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
        <H2>Text</H2>
        <XStack>
          <Button variant={"text"} size={"small"} disabled>
            Save
          </Button>
          <Button variant={"text"} size={"medium"}>
            Save
          </Button>
          <Button variant={"text"} size={"large"} disabled>
            Save
          </Button>
          <Button variant={"text"} size={"extra-large"}>
            Save
          </Button>
        </XStack>
      </div>
      <Hr />
      <div>
        <H2>Oval</H2>
        <div>
          <XStack>
            <Button variant={"filled"} shape={"oval"} size={"small"}>
              Save
            </Button>
            <Button
              variant={"filled"}
              shape={"oval"}
              size={"medium"}
              disabled={true}
            >
              Save
            </Button>
            <Button variant={"filled"} shape={"oval"} size={"large"}>
              Save
            </Button>
            <Button variant={"filled"} shape={"oval"} size={"extra-large"}>
              Save
            </Button>
          </XStack>
        </div>
      </div>
      <div>
        <H2>Square</H2>
        <div>
          <XStack>
            <Button variant={"filled"} size={"small"} shape={"square"}>
              Save
            </Button>
            <Button variant={"filled"} size={"medium"} shape={"square"}>
              Save
            </Button>
            <Button variant={"filled"} size={"large"} shape={"square"}>
              Save
            </Button>
            <Button
              variant={"filled"}
              size={"extra-large"}
              shape={"square"}
              disabled={true}
            >
              Save
            </Button>
          </XStack>
        </div>
      </div>
      <div>
        <H2>Outlined</H2>
        <XStack>
          <Button variant={"outlined"} size={"small"} shape={"square"}>
            Save
          </Button>
          <Button variant={"outlined"} size={"medium"} shape={"square"}>
            Save
          </Button>
          <Button
            variant={"outlined"}
            size={"large"}
            shape={"square"}
            disabled={true}
          >
            Save
          </Button>
          <Button variant={"outlined"} size={"extra-large"} shape={"square"}>
            Save
          </Button>
        </XStack>
      </div>
      <div>
        <H2>Round</H2>
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
