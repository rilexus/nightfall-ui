import React, { FunctionComponent, PropsWithChildren } from "react";
import { Center, Flow, PlatterCard } from "@nightfall-ui/components";
import { useTheme } from "styled-components";
import { useBreakpoints, useMouseOver } from "@nightfall-ui/hooks";
import { LargeTitle } from "@nightfall-ui/typography";
import { RadialMask } from "@nightfall-ui/components";
import { useColorSchema } from "../../hooks/useColorSchema/useColorSchema";
import { ScaleTransition } from "react-transitions-library";
import { Theme } from "@nightfall-ui/themes";

const CardWithGradient: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [scheme] = useColorSchema();
  const [isOver, ref] = useMouseOver<HTMLDivElement>();

  return (
    <ScaleTransition in={isOver} timeout={200} from={1} to={1.008}>
      <RadialMask
        ref={ref}
        textColorMix={{ color: "red", alpha: 0.8 }}
        backgroundColorMix={{
          color: scheme === "dark" ? "white" : "black",
          alpha: 0.05,
        }}
      >
        <PlatterCard type={"thick"}>{children}</PlatterCard>
      </RadialMask>
    </ScaleTransition>
  );
};

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
              <CardWithGradient>
                {Object.entries(breakpoints).map(([query, value]) => {
                  return (
                    <div key={query}>
                      {query}: {value ? "true" : "false"}
                    </div>
                  );
                })}
              </CardWithGradient>
            </Flow.Item>
            <Flow.Item default={50} sm={50} md={30} lg={33.33} xl={10}>
              <CardWithGradient>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 40%</div>
                <div>lg: 33.33%</div>
                <div>xl: 10%</div>
              </CardWithGradient>
            </Flow.Item>
            <Flow.Item default={50} sm={50} md={70} lg={66.67} xl={80}>
              <CardWithGradient>
                <div>default (0px): 50%</div>
                <div>small: 50%</div>
                <div>medium: 60%</div>
                <div>lg: 65%</div>
                <div>xl: 80%</div>
              </CardWithGradient>
            </Flow.Item>
            <Flow.Item>
              <CardWithGradient>
                <div>width: 100%</div>
              </CardWithGradient>
            </Flow.Item>
            <Flow.Item default={50}>
              <div>
                <CardWithGradient>
                  <div>width: 50%</div>
                </CardWithGradient>
              </div>
            </Flow.Item>
            <Flow.Item default={50}>
              <CardWithGradient>
                <div>width: 50%</div>
              </CardWithGradient>
            </Flow.Item>
          </Flow>
        </div>
      </Center>
    </div>
  );
};

export { FlowPage };
