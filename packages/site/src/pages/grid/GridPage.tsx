import React from "react";
import { Center, Grid } from "@nightfall-ui/components";
import { Card } from "@nightfall-ui/components";
import { useTheme } from "styled-components";
import { Theme } from "@nightfall-ui/css";
import { useBreakpoints } from "@nightfall-ui/hooks";

const GridPage = () => {
  const theme = useTheme() as Theme;
  const breakpoints = useBreakpoints(theme.breakpoints);

  const centerWidth = { sm: 80, md: 50 };

  return (
    <div>
      <Center {...centerWidth}>
        <div>
          <Grid spacing={"25"}>
            <Grid.Item sm={100}>
              <div>
                <Card>
                  {Object.entries(breakpoints).map(([query, value]) => {
                    return (
                      <div key={query}>
                        {query}: {value ? "true" : "false"}
                      </div>
                    );
                  })}
                </Card>
              </div>
            </Grid.Item>
            <Grid.Item default={50} sm={50} md={30} lg={33.33} xl={10}>
              <Card>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 40%</div>
                <div>lg: 33.33%</div>
                <div>xl: 10%</div>
              </Card>
            </Grid.Item>
            <Grid.Item default={50} sm={50} md={70} lg={66.67} xl={80}>
              <Card>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 60%</div>
                <div>lg: 65%</div>
                <div>xl: 80%</div>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card>
                <div>width: 100%</div>
              </Card>
            </Grid.Item>
            <Grid.Item default={50}>
              <Card>
                <div>width: 50%</div>
              </Card>
            </Grid.Item>
            <Grid.Item default={50}>
              <Card>
                <div>width: 50%</div>
              </Card>
            </Grid.Item>
          </Grid>
        </div>
      </Center>
    </div>
  );
};

export { GridPage };
