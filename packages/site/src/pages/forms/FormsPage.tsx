import React, { useState } from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledLargeInput,
  SquareOutlinedLargeInput,
  TextArea,
} from "@nightfall-ui/inputs";
import { Center, Flex, Grid, YSpacer, YStack } from "@nightfall-ui/layout";
import { Card } from "@nightfall-ui/surfaces";
import { Input, SquareInput } from "@nightfall-ui/inputs";

const FormsPage = () => {
  const [error, setError] = useState(false);

  return (
    <Center small={80} medium={50}>
      <div>
        <PageTitle>Fields</PageTitle>
        <div>
          <Card
            style={{
              maxWidth: "800px",
            }}
          >
            <Flex justify={"evenly"}>
              <button onClick={() => setError((e) => !e)}>error</button>
              <div>
                <YSpacer spacing={"large"}>
                  <h4>Square Filled Input</h4>
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
              </div>
              <div>
                <YSpacer spacing={"large"}>
                  <h4>Square Outlined Input</h4>
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
              <div>
                <YSpacer spacing={"large"}>
                  <h4>Round Filled Input</h4>
                </YSpacer>
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
