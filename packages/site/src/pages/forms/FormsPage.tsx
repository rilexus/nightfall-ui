import React, { useState } from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledLargeInput,
  SquareOutlinedLargeInput,
  SquareOutlinedMediumInput,
} from "@nightfall-ui/inputs";
import { Flex, Grid, YSpacer, YStack } from "@nightfall-ui/layout";
import { Card } from "@nightfall-ui/surfaces";
import { Dialog } from "@nightfall-ui/dialog";
import { Button } from "@nightfall-ui/buttons";
import { Input, SquareInput } from "@nightfall-ui/inputs";

const FormsPage = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Dialog
        open={isOpen}
        element={
          <Card>
            <YStack>
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
            </YStack>
            <YStack>
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
              <Input placeholder={"Placeholder"} />
            </YStack>
            <div>
              <Button
                onClick={() => {
                  console.log("cl");
                  setOpen((o) => !o);
                }}
              >
                open
              </Button>
            </div>
          </Card>
        }
        onClose={() => {
          setOpen((o) => !o);
        }}
      >
        <Button
          onClick={() => {
            console.log("cl");
            setOpen((o) => !o);
          }}
        >
          open
        </Button>
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
                  <YStack spacing={"medium"}>
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
                  <YStack>
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
                  <YStack>
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
      </Dialog>
    </div>
  );
};

export { FormsPage };
