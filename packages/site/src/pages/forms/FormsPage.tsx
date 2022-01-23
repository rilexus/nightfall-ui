import React from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledLargeInput,
  SquareFilledMediumInput,
  SquareFilledSmallInput,
  SquareOutlinedLargeInput,
  SquareOutlinedMediumInput,
  SquareOutlinedSmallInput,
} from "@nightfall-ui/forms";
import { Grid, GridItem, XStack, YSpacer, YStack } from "@nightfall-ui/layout";

const FormsPage = () => {
  return (
    <div>
      <PageTitle>Forms</PageTitle>
      <div>
        <XStack>
          <div>
            <YSpacer spacing={"extra-large"}>
              <h4>Square Filled Input</h4>
            </YSpacer>
            <YStack spacing={"medium"}>
              <SquareFilledSmallInput placeholder={"Placeholder"} />
              <SquareFilledMediumInput placeholder={"Placeholder"} />
              <SquareFilledLargeInput placeholder={"Placeholder"} />
            </YStack>
          </div>
          <div>
            <YSpacer spacing={"extra-large"}>
              <h4>Square Outlined Input</h4>
            </YSpacer>
            <YStack>
              <SquareOutlinedSmallInput placeholder={"Placeholder"} />
              <SquareOutlinedMediumInput placeholder={"Placeholder"} />
              <SquareOutlinedLargeInput placeholder={"Placeholder"} />
            </YStack>
          </div>
        </XStack>
      </div>
      <div>
        <YSpacer spacing={"extra-large"}>
          <h4>Contact Form</h4>
        </YSpacer>
        <Grid spacing={"50"}>
          <GridItem large={12} tablet={6} laptop={9} desktop={11}>
            <SquareOutlinedMediumInput
              placeholder={"First name"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>
          <GridItem large={12} tablet={6} laptop={3} desktop={1}>
            <SquareOutlinedMediumInput
              placeholder={"Last name"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>

          <GridItem small={12}>
            <SquareOutlinedMediumInput
              placeholder={"Street"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>

          <GridItem small={12}>
            <SquareOutlinedMediumInput
              placeholder={"Nr"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>

          <GridItem small={12}>
            <SquareOutlinedMediumInput
              placeholder={"ZIP"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>

          <GridItem small={12}>
            <SquareOutlinedMediumInput
              placeholder={"City"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>

          <GridItem small={12}>
            <SquareOutlinedMediumInput
              placeholder={"Country"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export { FormsPage };
