import React, { useState } from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledLargeInput,
  SquareOutlinedLargeInput,
  TextArea,
} from "@nightfall-ui/components";
import { Center, Flex, Grid, YSpacer, YStack } from "@nightfall-ui/components";
import { Card } from "@nightfall-ui/components";
import { Input, SquareInput } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const FormsPage = () => {
  const [error, setError] = useState(false);

  return (
    <Center small={80} medium={50}>
      <div>
        <PageTitle>Fields</PageTitle>
        <div>
          <Card
            style={{
              maxWidth: "1000px",
            }}
          >
            <button onClick={() => setError((e) => !e)}>error</button>
            <Flex justify={"evenly"}>
              <div>
                <Title1 type={"primary"} weight={"regular"}>
                  Square
                </Title1>
                <div>
                  <YSpacer spacing={"large"}>
                    <h4>Filled</h4>
                  </YSpacer>
                  <YStack spacing={"small"}>
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
                    <YSpacer spacing={"large"}>
                      <h4>Outlined</h4>
                    </YSpacer>
                    <YStack spacing={"small"}>
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
                <YSpacer spacing={"large"}>
                  <h4>Filled</h4>
                </YSpacer>

                <div>
                  <YStack spacing={"small"}>
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
                    <YSpacer spacing={"large"}>
                      <h4>Outlined</h4>
                    </YSpacer>
                    <YStack spacing={"small"}>
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
          </Card>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <YSpacer spacing={"large"}>
            <h4>Contact Form</h4>
          </YSpacer>

          <Grid
            spacing={"25"}
            style={{
              top: 0,
            }}
          >
            <Grid.Item small={12} large={6}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"First name"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>
            <Grid.Item small={12} large={6}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Last name"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>

            <Grid.Item small={12} medium={9} large={10} laptop={11}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Street"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>

            <Grid.Item small={12} medium={3} large={2} laptop={1}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Nr."}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>

            <Grid.Item small={12} medium={3} large={2} laptop={1}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"ZIP"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>

            <Grid.Item small={12} medium={9} large={10} laptop={11}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"City"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>

            <Grid.Item small={12}>
              <Input
                shape={"square"}
                variant={"outlined"}
                size={"large"}
                placeholder={"Country"}
                style={{
                  width: "100%",
                }}
              />
            </Grid.Item>
          </Grid>
        </div>
        <div>
          <YSpacer spacing={"large"}>
            <h4>Text area</h4>
          </YSpacer>
          <TextArea placeholder={"textarea"} />
        </div>
      </div>
    </Center>
  );
};

export { FormsPage };
