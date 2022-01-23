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
import {
  Grid,
  GridItem,
  HorizontalStack,
  VerticalSpacer,
  VerticalStack,
} from "@nightfall-ui/layout";

const FormsPage = () => {
  return (
    <div>
      <PageTitle>Forms</PageTitle>
      <div>
        <HorizontalStack>
          <div>
            <VerticalSpacer spacing={"extra-large"}>
              <h4>Square Filled Input</h4>
            </VerticalSpacer>
            <VerticalStack spacing={"medium"}>
              <SquareFilledSmallInput placeholder={"Placeholder"} />
              <SquareFilledMediumInput placeholder={"Placeholder"} />
              <SquareFilledLargeInput placeholder={"Placeholder"} />
            </VerticalStack>
          </div>
          <div>
            <VerticalSpacer spacing={"extra-large"}>
              <h4>Square Outlined Input</h4>
            </VerticalSpacer>
            <VerticalStack>
              <SquareOutlinedSmallInput placeholder={"Placeholder"} />
              <SquareOutlinedMediumInput placeholder={"Placeholder"} />
              <SquareOutlinedLargeInput placeholder={"Placeholder"} />
            </VerticalStack>
          </div>
        </HorizontalStack>
      </div>
      <div>
        <VerticalSpacer spacing={"extra-large"}>
          <h4>Contact Form</h4>
        </VerticalSpacer>
        <Grid spacing={"50"}>
          <GridItem large={12} tablet={6} laptop={6}>
            <SquareOutlinedMediumInput
              placeholder={"First name"}
              style={{
                width: "100%",
              }}
            />
          </GridItem>
          <GridItem large={12} tablet={6} laptop={6}>
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
