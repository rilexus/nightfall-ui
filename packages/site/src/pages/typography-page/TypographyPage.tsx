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
import { Center, Flex } from "@nightfall-ui/layout";
import { YStack } from "@nightfall-ui/layout";

const TypographyPage = () => {
  return (
    <Center
      small={80}
      medium={50}
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
              <LargeTitle weight={"regular"} type={"primary"}>
                Title3 Regular Primary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"secondary"}>
                Title3 Regular Secondary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"tertiary"}>
                Title3 Regular Tertiary
              </LargeTitle>
              <LargeTitle weight={"regular"} type={"quaternary"}>
                Title3 Regular Quaternary
              </LargeTitle>
            </div>

            <div>
              <h3>Bold</h3>
              <LargeTitle weight={"bold"} type={"primary"}>
                Title3 Bold Primary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"secondary"}>
                Title3 Bold Secondary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"tertiary"}>
                Title3 Bold Tertiary
              </LargeTitle>
              <LargeTitle weight={"bold"} type={"quaternary"}>
                Title3 Bold Quaternary
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
              <Title1Regular>Title1 Regular Primary</Title1Regular>
              <Title1Regular type={"secondary"}>
                Title1 Regular Secondary
              </Title1Regular>
              <Title1Regular type={"tertiary"}>
                Title1 Regular Tertiary
              </Title1Regular>
              <Title1Regular type={"quaternary"}>
                Title1 Regular Quaternary
              </Title1Regular>
            </div>

            <div>
              <h3>Bold</h3>
              <Title1Bold type={"primary"}>Title1 Bold Quaternary</Title1Bold>
              <Title1Bold type={"secondary"}>Title1 Bold Secondary</Title1Bold>
              <Title1 type={"tertiary"} weight={"bold"}>
                Title1 Bold Tertiary
              </Title1>
              <Title1 type={"quaternary"} weight={"bold"}>
                Title1 Bold Quaternary
              </Title1>
            </div>
          </Flex>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Title 2
          </Title1>
          <div>
            <h3>Regular</h3>
            <Title2 weight={"regular"} type={"primary"}>
              Title2 Regular Primary
            </Title2>
            <Title2 weight={"regular"} type={"secondary"}>
              Title2 Regular Secondary
            </Title2>
            <Title2 weight={"regular"} type={"tertiary"}>
              Title2 Regular Tertiary
            </Title2>
            <Title2 weight={"regular"} type={"quaternary"}>
              Title2 Regular Quaternary
            </Title2>
          </div>
        </div>

        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Title 3
          </Title1>
          <Flex justify={"left"}>
            <div>
              <h3>Regular</h3>
              <Title3 weight={"regular"} type={"primary"}>
                Title3 Regular Primary
              </Title3>
              <Title3 weight={"regular"} type={"secondary"}>
                Title3 Regular Secondary
              </Title3>
              <Title3 weight={"regular"} type={"tertiary"}>
                Title3 Regular Tertiary
              </Title3>
              <Title3 weight={"regular"} type={"quaternary"}>
                Title3 Regular Quaternary
              </Title3>
            </div>
            <div>
              <h3>Bold</h3>
              <Title3 weight={"bold"} type={"primary"}>
                Title3 Bold Primary
              </Title3>
              <Title3 weight={"bold"} type={"secondary"}>
                Title3 Bold Secondary
              </Title3>
              <Title3 weight={"bold"} type={"tertiary"}>
                Title3 Bold Tertiary
              </Title3>
              <Title3 weight={"bold"} type={"quaternary"}>
                Title3 Bold Quaternary
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
                Headline Regular Primary
              </Headline>
              <Headline weight={"regular"} type={"secondary"}>
                Headline Regular Secondary
              </Headline>
              <Headline weight={"regular"} type={"tertiary"}>
                Headline Regular Tertiary
              </Headline>
              <Headline weight={"regular"} type={"quaternary"}>
                Headline Regular Quaternary
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
                SubHeadline Regular Primary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"secondary"}>
                SubHeadline Regular Secondary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"tertiary"}>
                SubHeadline Regular Tertiary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"quaternary"}>
                SubHeadline Regular Quaternary
              </SubHeadline>
            </div>

            <div>
              <h3>Bold</h3>
              <SubHeadline weight={"bold"} type={"primary"}>
                SubHeadline Bold Primary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"secondary"}>
                SubHeadline Bold Secondary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"tertiary"}>
                SubHeadline Bold Tertiary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"quaternary"}>
                SubHeadline Bold Quaternary
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
                Caption1 Regular Primary
              </Caption1>
              <Caption1 weight={"regular"} type={"secondary"}>
                Caption1 Regular Secondary
              </Caption1>
              <Caption1 weight={"regular"} type={"tertiary"}>
                Caption1 Regular Tertiary
              </Caption1>
              <Caption1 weight={"regular"} type={"quaternary"}>
                Caption1 Regular Quaternary
              </Caption1>
            </div>

            <div>
              <h3>Bold</h3>
              <Caption1 weight={"bold"} type={"primary"}>
                Caption1 Bold Primary
              </Caption1>
              <Caption1 weight={"bold"} type={"secondary"}>
                Caption1 Bold Secondary
              </Caption1>
              <Caption1 weight={"bold"} type={"tertiary"}>
                Caption1 Bold Tertiary
              </Caption1>
              <Caption1 weight={"bold"} type={"quaternary"}>
                Caption1 Bold Quaternary
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
                Caption2 Regular Primary
              </Caption2>
              <Caption2 weight={"regular"} type={"secondary"}>
                Caption2 Regular Secondary
              </Caption2>
              <Caption2 weight={"regular"} type={"tertiary"}>
                Caption2 Regular Tertiary
              </Caption2>
              <Caption2 weight={"regular"} type={"quaternary"}>
                Caption2 Regular Quaternary
              </Caption2>
            </div>

            <div>
              <h3>Bold</h3>
              <Caption2 weight={"bold"} type={"primary"}>
                Caption2 Bold Primary
              </Caption2>
              <Caption2 weight={"bold"} type={"secondary"}>
                Caption2 Bold Secondary
              </Caption2>
              <Caption2 weight={"bold"} type={"tertiary"}>
                Caption2 Bold Tertiary
              </Caption2>
              <Caption2 weight={"bold"} type={"quaternary"}>
                Caption2 Bold Quaternary
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
                Footnote Regular Primary
              </Footnote>
              <Footnote weight={"regular"} type={"secondary"}>
                Footnote Regular Secondary
              </Footnote>
              <Footnote weight={"regular"} type={"tertiary"}>
                Footnote Regular Tertiary
              </Footnote>
              <Footnote weight={"regular"} type={"quaternary"}>
                Footnote Regular Quaternary
              </Footnote>
            </div>

            <div>
              <h3>Bold</h3>
              <Footnote weight={"bold"} type={"primary"}>
                Footnote Bold Primary
              </Footnote>
              <Footnote weight={"bold"} type={"secondary"}>
                Footnote Bold Secondary
              </Footnote>
              <Footnote weight={"bold"} type={"tertiary"}>
                Footnote Bold Tertiary
              </Footnote>
              <Footnote weight={"bold"} type={"quaternary"}>
                Footnote Bold Quaternary
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
                Callout Regular Primary
              </Callout>
              <Callout weight={"regular"} type={"secondary"}>
                Callout Regular Secondary
              </Callout>
              <Callout weight={"regular"} type={"tertiary"}>
                Callout Regular Tertiary
              </Callout>
              <Callout weight={"regular"} type={"quaternary"}>
                Callout Regular Quaternary
              </Callout>
            </div>

            <div>
              <h3>Bold</h3>
              <Callout weight={"bold"} type={"primary"}>
                Callout Bold Primary
              </Callout>
              <Callout weight={"bold"} type={"secondary"}>
                Footnote Bold Secondary
              </Callout>
              <Callout weight={"bold"} type={"tertiary"}>
                Callout Bold Tertiary
              </Callout>
              <Callout weight={"bold"} type={"quaternary"}>
                Callout Bold Quaternary
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
                Body Regular Primary
              </Body>
              <Body weight={"regular"} type={"secondary"}>
                Body Regular Secondary
              </Body>
              <Body weight={"regular"} type={"tertiary"}>
                Body Regular Tertiary
              </Body>
              <Body weight={"regular"} type={"quaternary"}>
                Body Regular Quaternary
              </Body>
            </div>

            <div>
              <h3>Bold</h3>
              <Body weight={"bold"} type={"primary"}>
                Body Bold Primary
              </Body>
              <Body weight={"bold"} type={"secondary"}>
                Body Bold Secondary
              </Body>
              <Body weight={"bold"} type={"tertiary"}>
                Body Bold Tertiary
              </Body>
              <Body weight={"bold"} type={"quaternary"}>
                Body Bold Quaternary
              </Body>
            </div>
          </Flex>
        </div>
      </YStack>
    </Center>
  );
};

export { TypographyPage };
