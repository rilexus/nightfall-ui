import { Center } from "@nightfall-ui/layout";
import React, { FC, useRef } from "react";
import { ScrollInertia } from "@nightfall-ui/scroll-inertia";
import { useScrollVelocity } from "@nightfall-ui/hooks";
import { Card } from "@nightfall-ui/surfaces";
import { Caption1 } from "@nightfall-ui/typography";

const SmallInertia: FC<{ velocity: number }> = ({ children, velocity }) => {
  return (
    <ScrollInertia
      velocity={velocity}
      deltaSpeed={[0.1, 0.7]}
      timeout={70}
      translation={10}
    >
      {children}
    </ScrollInertia>
  );
};

const MediumInertia: FC<{ velocity: number }> = ({ children, velocity }) => {
  return (
    <ScrollInertia
      velocity={velocity}
      deltaSpeed={[0.5, 1.2]}
      timeout={100}
      translation={20}
    >
      {children}
    </ScrollInertia>
  );
};

const HeavyInertia: FC<{ velocity: number }> = ({ children, velocity }) => {
  return (
    <ScrollInertia
      velocity={velocity}
      deltaSpeed={[1, 2]}
      timeout={120}
      translation={20}
    >
      {children}
    </ScrollInertia>
  );
};

const Margin: FC<{ value: string }> = ({ children, value }) => {
  return (
    <div
      style={{
        margin: value,
      }}
    >
      {children}
    </div>
  );
};

const ScrollInertiaPage = () => {
  const ref = useRef(null);
  const velocity = useScrollVelocity(ref);

  return (
    <Center small={80} medium={50}>
      <div
        ref={ref}
        style={{
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            height: "300vh",
          }}
        >
          <div>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "150px",
                    width: "150px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <HeavyInertia velocity={velocity}>
                <Card
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </HeavyInertia>
            </Margin>
          </div>

          <div>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "150px",
                    width: "150px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <HeavyInertia velocity={velocity}>
                <Card
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </HeavyInertia>
            </Margin>
          </div>

          <div>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "150px",
                    width: "150px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <HeavyInertia velocity={velocity}>
                <Card
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </HeavyInertia>
            </Margin>
          </div>

          <div>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <MediumInertia velocity={velocity}>
                <Card
                  style={{
                    height: "150px",
                    width: "150px",
                  }}
                />
              </MediumInertia>
            </Margin>
            <Margin value={"1.5rem 0"}>
              <Margin value={".5rem 0"}>
                <SmallInertia velocity={velocity}>
                  <Caption1 weight={"regular"} type={"primary"}>
                    Title
                  </Caption1>
                </SmallInertia>
              </Margin>
              <HeavyInertia velocity={velocity}>
                <Card
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                />
              </HeavyInertia>
            </Margin>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default ScrollInertiaPage;
