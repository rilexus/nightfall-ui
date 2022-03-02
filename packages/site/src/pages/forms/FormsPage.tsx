import React, { useState } from "react";
import { PageTitle } from "../../components";
import {
  Option,
  Select,
  SquareFilledLargeInput,
  SquareOutlinedLargeInput,
} from "@nightfall-ui/inputs";
import { Flex, Grid, Hr, YSpacer, YStack } from "@nightfall-ui/layout";
import { Card } from "@nightfall-ui/surfaces";
import { Input, SquareInput } from "@nightfall-ui/inputs";

const FormsPage = () => {
  const [value, setValue] = useState("cat");
  return (
    <div>
      <div>
        <PageTitle>Fields</PageTitle>
        <div>
          <Card
            style={{
              maxWidth: "800px",
            }}
          >
            <Flex justify={"evenly"}>
              <div>
                <YSpacer spacing={"large"}>
                  <h4>Square Filled Input</h4>
                </YSpacer>
                <YStack spacing={"small"}>
                  <Input
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
                    size={"medium"}
                  />
                  <SquareOutlinedLargeInput placeholder={"Placeholder"} />
                </YStack>
              </div>
              <div>
                <YSpacer spacing={"large"}>
                  <h4>Round Filled Input</h4>
                </YSpacer>
                <YStack spacing={"small"}>
                  <Input
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
      </div>
      <div>
        <Hr />
        <h4>Select</h4>
        <Select onChange={(e: any) => setValue(e.target.value)} value={value}>
          <Option value={"cat"}>Cat</Option>
          <Option value={"dog"}>Dog</Option>
          <Option value={"mouse"}>Mouse</Option>
        </Select>
      </div>
    </div>
  );
};

export { FormsPage };
