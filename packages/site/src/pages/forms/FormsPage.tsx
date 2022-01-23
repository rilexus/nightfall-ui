import React from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledLargeInput,
  SquareFilledMediumInput,
  SquareFilledSmallInput,
  // SquareOutlinedLargeInput,
  SquareOutlinedMediumInput,
  SquareOutlinedSmallField,
} from "@nightfall-ui/text-fields";
import { Flex, Grid, YSpacer, YStack } from "@nightfall-ui/layout";
import { Card } from "@nightfall-ui/surfaces";

const FormsPage = () => {
  return (
    <div>
      <PageTitle>Fields</PageTitle>
      <div>
        <Card
          style={{
            maxWidth: "500px",
          }}
        >
          <Flex justify={"evenly"}>
            <div>
              <YSpacer spacing={"large"}>
                <h4>Square Filled Input</h4>
              </YSpacer>
              <YStack spacing={"medium"}>
                <SquareFilledSmallInput placeholder={"Placeholder"} />
                <SquareFilledMediumInput placeholder={"Placeholder"} />
                <SquareFilledLargeInput placeholder={"Placeholder"} />
              </YStack>
            </div>
            <div>
              <YSpacer spacing={"large"}>
                <h4>Square Outlined Input</h4>
              </YSpacer>
              <YStack>
                <SquareOutlinedSmallField placeholder={"Placeholder"} />
                <SquareOutlinedSmallField placeholder={"Placeholder"} />
                <SquareOutlinedSmallField placeholder={"Placeholder"} />
              </YStack>
            </div>
          </Flex>
        </Card>
      </div>
      <div>
        <YSpacer spacing={"large"}>
          <h4>Contact Form</h4>
        </YSpacer>
        <Grid spacing={"50"}>
          <Grid.Item small={12} large={6}>
            <SquareOutlinedMediumInput
              placeholder={"First name"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>
          <Grid.Item small={12} large={6}>
            <SquareOutlinedMediumInput
              placeholder={"Last name"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>

          <Grid.Item small={12} medium={9} large={10} laptop={11}>
            <SquareOutlinedMediumInput
              placeholder={"Street"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>

          <Grid.Item small={12} medium={3} large={2} laptop={1}>
            <SquareOutlinedMediumInput
              placeholder={"Nr"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>

          <Grid.Item small={12} medium={3} large={2} laptop={1}>
            <SquareOutlinedMediumInput
              placeholder={"ZIP"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>

          <Grid.Item small={12} medium={9} large={10} laptop={11}>
            <SquareOutlinedMediumInput
              placeholder={"City"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>

          <Grid.Item small={12}>
            <SquareOutlinedMediumInput
              placeholder={"Country"}
              style={{
                width: "100%",
              }}
            />
          </Grid.Item>
        </Grid>
      </div>
    </div>
  );
};

export { FormsPage };
