import React from "react";
import { Center, Flow } from "@nightfall-ui/components";
import { Card } from "@nightfall-ui/components";
import { useTheme } from "styled-components";
import { Theme } from "@nightfall-ui/css";
import { useBreakpoints } from "@nightfall-ui/hooks";
import { LargeTitle } from "@nightfall-ui/typography";

const FlowPage = () => {
  const theme = useTheme() as Theme;
  const breakpoints = useBreakpoints(theme.breakpoints);

  const centerWidth = { sm: 80, md: 50 };

  return (
    <div>
      <Center {...centerWidth}>
        <LargeTitle type={"primary"} weight={"bold"}>
          Flow
        </LargeTitle>
        <div>
          <Flow spacing={"25"}>
            <Flow.Item sm={100}>
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
            </Flow.Item>
            <Flow.Item default={50} sm={50} md={30} lg={33.33} xl={10}>
              <Card>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 40%</div>
                <div>lg: 33.33%</div>
                <div>xl: 10%</div>
              </Card>
            </Flow.Item>
            <Flow.Item default={50} sm={50} md={70} lg={66.67} xl={80}>
              <Card>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 60%</div>
                <div>lg: 65%</div>
                <div>xl: 80%</div>
              </Card>
            </Flow.Item>
            <Flow.Item>
              <Card>
                <div>width: 100%</div>
              </Card>
            </Flow.Item>
            <Flow.Item default={50}>
              <Card>
                <div>width: 50%</div>
              </Card>
            </Flow.Item>
            <Flow.Item default={50}>
              <Card>
                <div>width: 50%</div>
              </Card>
            </Flow.Item>
          </Flow>
        </div>
      </Center>
    </div>
  );
};

export { FlowPage };
