import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import { PageTitle } from "../../components";
import {
  PlatterCard,
  RadialMask,
  SquareFilledLargeInput,
  SquareOutlinedLargeInput,
  TextArea,
} from "@nightfall-ui/components";
import { Center, Flex, Flow, YSpacer, YStack } from "@nightfall-ui/components";

import { Input, SquareInput } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";
import { useColorSchema } from "../../hooks/useColorSchema/useColorSchema";
// import { useMouseOver } from "@nightfall-ui/hooks";
// import { ScaleTransition } from "react-transitions-library";

const CardWithGradient: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [scheme] = useColorSchema();
  // const [isOver, ref] = useMouseOver<HTMLDivElement>();

  return (
    // <ScaleTransition in={isOver} timeout={200} from={1} to={1.008}>
    <RadialMask
      // ref={ref}
      textColorMix={{ color: "red", alpha: 0.8 }}
      backgroundColorMix={{
        color: scheme === "dark" ? "white" : "black",
        alpha: 0.05,
      }}
    >
      <PlatterCard type={"regular"}>{children}</PlatterCard>
    </RadialMask>
    // </ScaleTransition>
  );
};

const FormsPage = () => {
  const [error, setError] = useState(false);

  return (
    <Center sm={80} md={50}>
      <div>
        <PageTitle>Fields</PageTitle>
        <div>
          <CardWithGradient
          // type={"thin"}
          // style={{
          //   maxWidth: "1000px",
          // }}
          >
            <button onClick={() => setError((e) => !e)}>error</button>
            <Flex justify={"evenly"}>
              <div>
                <Title1 type={"primary"} weight={"regular"}>
                  Square
                </Title1>
                <div>
                  <YSpacer spacing={"225"}>
                    <h4>Filled</h4>
                  </YSpacer>
                  <YStack spacing={"100"}>
                    <Input
                      invalid={error}
                      shape={"square"}
                      variant={"filled"}
                      size={"small"}
                      placeholder={"Placeholder"}
                    />
                    <SquareInput
                      size={"medium"}
                      variant={"filled"}
                      placeholder={"Placeholder"}
                    />
                    <SquareFilledLargeInput placeholder={"Placeholder"} />
                  </YStack>
                  <div>
                    <YSpacer spacing={"225"}>
                      <h4>Outlined</h4>
                    </YSpacer>
                    <YStack spacing={"100"}>
                      <Input
                        shape={"square"}
                        variant={"outlined"}
                        size={"small"}
                        placeholder={"Placeholder"}
                      />
                      <SquareInput
                        placeholder={"Placeholder"}
                        variant={"outlined"}
                        invalid={error}
                        size={"medium"}
                      />
                      <SquareOutlinedLargeInput
                        placeholder={"Placeholder"}
                        invalid={error}
                      />
                    </YStack>
                  </div>
                </div>
              </div>
              <div>
                <Title1 type={"primary"} weight={"regular"}>
                  Round
                </Title1>
                <YSpacer spacing={"225"}>
                  <h4>Filled</h4>
                </YSpacer>

                <div>
                  <YStack spacing={"100"}>
                    <Input
                      invalid={error}
                      placeholder={"Placeholder"}
                      shape={"round"}
                      size={"small"}
                      variant={"filled"}
                    />
                    <Input
                      placeholder={"Placeholder"}
                      shape={"round"}
                      size={"medium"}
                      variant={"filled"}
                    />
                    <Input
                      placeholder={"Placeholder"}
                      shape={"round"}
                      size={"large"}
                      variant={"filled"}
                    />
                  </YStack>
                  <div>
                    <YSpacer spacing={"225"}>
                      <h4>Outlined</h4>
                    </YSpacer>
                    <YStack spacing={"100"}>
                      <Input
                        invalid={error}
                        placeholder={"Placeholder"}
                        shape={"round"}
                        size={"small"}
                        variant={"outlined"}
                      />
                      <Input
                        placeholder={"Placeholder"}
                        shape={"round"}
                        size={"medium"}
                        variant={"outlined"}
                      />
                      <Input
                        placeholder={"Placeholder"}
                        shape={"round"}
                        size={"large"}
                        variant={"outlined"}
                      />
                    </YStack>
                  </div>
                </div>
              </div>
            </Flex>
          </CardWithGradient>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <YSpacer spacing={"225"}>
            <h4>Contact Form</h4>
          </YSpacer>

          <Flow
            spacing={"25"}
            style={{
              top: 0,
            }}
          >
            <Flow.Item sm={100} lg={50}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"First name"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>
            <Flow.Item sm={100} lg={50}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Last name"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>

            <Flow.Item sm={100} md={90} lg={10}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Street"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>

            <Flow.Item sm={100} md={30} lg={20}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Nr."}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>

            <Flow.Item sm={100} md={30} lg={20}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"ZIP"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>

            <Flow.Item sm={12} md={9} lg={10}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"City"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>

            <Flow.Item sm={12}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Country"}
                style={{
                  width: "100%",
                }}
              />
            </Flow.Item>
          </Flow>
        </div>
        <div>
          <YSpacer spacing={"225"}>
            <h4>Text area</h4>
          </YSpacer>
          <TextArea placeholder={"textarea"} />
        </div>
      </div>
    </Center>
  );
};

export { FormsPage };
