import React from "react";
import { Center, Grid } from "@nightfall-ui/layout";
import { Card } from "@nightfall-ui/surfaces";

const GridPage = () => {
  return (
    <Center small={80} medium={50}>
      <div>
        <Grid spacing={"25"}>
          <Grid.Item small={12} medium={4} tablet={3} laptop={2}>
            <Card>
              <div>&lt;small: 12/12</div>
              <div>&gt;medium: 4/12</div>
              <div>&gt;tablet: 3/12</div>
              <div>&gt;laptop: 2/12</div>
            </Card>
          </Grid.Item>
          <Grid.Item small={12} medium={4} tablet={6} laptop={8}>
            <Card>
              <div>&lt;small: 12/12</div>
              <div>&gt;medium: 4/12</div>
              <div>&gt;tablet: 3/12</div>
              <div>&gt;laptop: 2/12</div>
            </Card>
          </Grid.Item>
          <Grid.Item small={12} medium={4} tablet={3} laptop={2}>
            <Card>
              <div>&lt;small: 12/12</div>
              <div>&gt;medium: 4/12</div>
              <div>&gt;tablet: 3/12</div>
              <div>&gt;laptop: 2/12</div>
            </Card>
          </Grid.Item>
        </Grid>
      </div>
    </Center>
  );
};

export { GridPage };
