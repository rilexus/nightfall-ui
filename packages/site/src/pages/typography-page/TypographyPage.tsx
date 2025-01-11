import React from "react";
import {
  Headline,
  Title1,
  Title1Bold,
  Title1Regular,
  Title2,
  Title3,
  SubHeadline,
  LargeTitle,
  Caption1,
  Caption2,
  Footnote,
  Callout,
  Body,
} from "@nightfall-ui/typography";
import { Center, Flex } from "@nightfall-ui/components";
import { YStack } from "@nightfall-ui/components";

const TypographyPage = () => {
  return (
    <Center
      sm={80}
      md={50}
      style={{
        color: "white",
      }}
    >
      <YStack spacing={"extra-large"}>
        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Large Title
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <LargeTitle weight={"regular"} type={"primary"} as={"h1"}>
                Primary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"secondary"}>
                Secondary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"tertiary"}>
                Tertiary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"quaternary"}>
                Quaternary
              </LargeTitle>
            </div>

            <div>
              <h3>Bold</h3>
              <LargeTitle weight={"bold"} type={"primary"}>
                Primary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"secondary"}>
                Secondary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"tertiary"}>
                Tertiary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"quaternary"}>
                Quaternary
              </LargeTitle>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Title 1
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Title1Regular>Primary</Title1Regular>
              <Title1Regular type={"secondary"}>Secondary</Title1Regular>
              <Title1Regular type={"tertiary"}>Tertiary</Title1Regular>
              <Title1Regular type={"quaternary"}>Quaternary</Title1Regular>
            </div>

            <div>
              <h3>Bold</h3>
              <Title1Bold type={"primary"}>Quaternary</Title1Bold>
              <Title1Bold type={"secondary"}>Secondary</Title1Bold>
              <Title1 type={"tertiary"} weight={"bold"}>
                Tertiary
              </Title1>
              <Title1 type={"quaternary"} weight={"bold"}>
                Quaternary
              </Title1>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Title 2
          </Title1>

          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Title2 weight={"regular"} type={"primary"}>
                Primary
              </Title2>
              <Title2 weight={"regular"} type={"secondary"}>
                Secondary
              </Title2>
              <Title2 weight={"regular"} type={"tertiary"}>
                Tertiary
              </Title2>
              <Title2 weight={"regular"} type={"quaternary"}>
                Quaternary
              </Title2>
            </div>

            <div>
              <h3>Bold</h3>
              <Title2 weight={"bold"} type={"primary"}>
                Primary
              </Title2>
              <Title2 weight={"bold"} type={"secondary"}>
                Secondary
              </Title2>
              <Title2 weight={"bold"} type={"tertiary"}>
                Tertiary
              </Title2>
              <Title2 weight={"bold"} type={"quaternary"}>
                Quaternary
              </Title2>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Title 3
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Title3 weight={"regular"} type={"primary"}>
                Primary
              </Title3>
              <Title3 weight={"regular"} type={"secondary"}>
                Secondary
              </Title3>
              <Title3 weight={"regular"} type={"tertiary"}>
                Tertiary
              </Title3>
              <Title3 weight={"regular"} type={"quaternary"}>
                Quaternary
              </Title3>
            </div>
            <div>
              <h3>Bold</h3>
              <Title3 weight={"bold"} type={"primary"}>
                Primary
              </Title3>
              <Title3 weight={"bold"} type={"secondary"}>
                Secondary
              </Title3>
              <Title3 weight={"bold"} type={"tertiary"}>
                Tertiary
              </Title3>
              <Title3 weight={"bold"} type={"quaternary"}>
                Quaternary
              </Title3>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Headline
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Headline weight={"regular"} type={"primary"}>
                Primary
              </Headline>
              <Headline weight={"regular"} type={"secondary"}>
                Secondary
              </Headline>
              <Headline weight={"regular"} type={"tertiary"}>
                Tertiary
              </Headline>
              <Headline weight={"regular"} type={"quaternary"}>
                Quaternary
              </Headline>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Sub Headline
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <SubHeadline weight={"regular"} type={"primary"}>
                Primary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"secondary"}>
                Secondary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"tertiary"}>
                Tertiary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"quaternary"}>
                Quaternary
              </SubHeadline>
            </div>

            <div>
              <h3>Bold</h3>
              <SubHeadline weight={"bold"} type={"primary"}>
                Primary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"secondary"}>
                Secondary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"tertiary"}>
                Tertiary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"quaternary"}>
                Quaternary
              </SubHeadline>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Caption1
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Caption1 weight={"regular"} type={"primary"}>
                Primary
              </Caption1>
              <Caption1 weight={"regular"} type={"secondary"}>
                Secondary
              </Caption1>
              <Caption1 weight={"regular"} type={"tertiary"}>
                Tertiary
              </Caption1>
              <Caption1 weight={"regular"} type={"quaternary"}>
                Quaternary
              </Caption1>
            </div>

            <div>
              <h3>Bold</h3>
              <Caption1 weight={"bold"} type={"primary"}>
                Primary
              </Caption1>
              <Caption1 weight={"bold"} type={"secondary"}>
                Secondary
              </Caption1>
              <Caption1 weight={"bold"} type={"tertiary"}>
                Tertiary
              </Caption1>
              <Caption1 weight={"bold"} type={"quaternary"}>
                Quaternary
              </Caption1>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Caption2
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Caption2 weight={"regular"} type={"primary"}>
                Primary
              </Caption2>
              <Caption2 weight={"regular"} type={"secondary"}>
                Secondary
              </Caption2>
              <Caption2 weight={"regular"} type={"tertiary"}>
                Tertiary
              </Caption2>
              <Caption2 weight={"regular"} type={"quaternary"}>
                Quaternary
              </Caption2>
            </div>

            <div>
              <h3>Bold</h3>
              <Caption2 weight={"bold"} type={"primary"}>
                Primary
              </Caption2>
              <Caption2 weight={"bold"} type={"secondary"}>
                Secondary
              </Caption2>
              <Caption2 weight={"bold"} type={"tertiary"}>
                Tertiary
              </Caption2>
              <Caption2 weight={"bold"} type={"quaternary"}>
                Quaternary
              </Caption2>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Footnote
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Footnote weight={"regular"} type={"primary"}>
                Primary
              </Footnote>
              <Footnote weight={"regular"} type={"secondary"}>
                Secondary
              </Footnote>
              <Footnote weight={"regular"} type={"tertiary"}>
                Tertiary
              </Footnote>
              <Footnote weight={"regular"} type={"quaternary"}>
                Quaternary
              </Footnote>
            </div>

            <div>
              <h3>Bold</h3>
              <Footnote weight={"bold"} type={"primary"}>
                Primary
              </Footnote>
              <Footnote weight={"bold"} type={"secondary"}>
                Secondary
              </Footnote>
              <Footnote weight={"bold"} type={"tertiary"}>
                Tertiary
              </Footnote>
              <Footnote weight={"bold"} type={"quaternary"}>
                Quaternary
              </Footnote>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Callout
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Callout weight={"regular"} type={"primary"}>
                Primary
              </Callout>
              <Callout weight={"regular"} type={"secondary"}>
                Secondary
              </Callout>
              <Callout weight={"regular"} type={"tertiary"}>
                Tertiary
              </Callout>
              <Callout weight={"regular"} type={"quaternary"}>
                Quaternary
              </Callout>
            </div>

            <div>
              <h3>Bold</h3>
              <Callout weight={"bold"} type={"primary"}>
                Primary
              </Callout>
              <Callout weight={"bold"} type={"secondary"}>
                Secondary
              </Callout>
              <Callout weight={"bold"} type={"tertiary"}>
                Tertiary
              </Callout>
              <Callout weight={"bold"} type={"quaternary"}>
                Quaternary
              </Callout>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Body
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Body weight={"regular"} type={"primary"}>
                Primary
              </Body>
              <Body weight={"regular"} type={"secondary"}>
                Secondary
              </Body>
              <Body weight={"regular"} type={"tertiary"}>
                Tertiary
              </Body>
              <Body weight={"regular"} type={"quaternary"}>
                Quaternary
              </Body>
            </div>

            <div>
              <h3>Bold</h3>
              <Body weight={"bold"} type={"primary"}>
                Primary
              </Body>
              <Body weight={"bold"} type={"secondary"}>
                Secondary
              </Body>
              <Body weight={"bold"} type={"tertiary"}>
                Tertiary
              </Body>
              <Body weight={"bold"} type={"quaternary"}>
                Quaternary
              </Body>
            </div>
          </Flex>
        </div>
      </YStack>
    </Center>
  );
};

export { TypographyPage };
