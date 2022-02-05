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
} from "@nightfall-ui/typography";
import { Flex } from "@nightfall-ui/layout";
import { YStack } from "@nightfall-ui/layout";

const TypographyPage = () => {
  return (
    <div
      style={{
        width: "1024px",
        margin: "0 auto",
        color: "white",
      }}
    >
      <YStack spacing={"extra-large"}>
        <div>
          <Title1 type={"primary"} weight={"regular"} as={"h2"}>
            Large Title
          </Title1>
          <Flex>
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
          <Flex>
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
          <Flex>
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
          <Flex>
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
          <Flex>
            <div>
              <h3>Regular</h3>
              <SubHeadline weight={"regular"} type={"primary"}>
                Title3 Regular Primary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"secondary"}>
                Title3 Regular Secondary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"tertiary"}>
                Title3 Regular Tertiary
              </SubHeadline>
              <SubHeadline weight={"regular"} type={"quaternary"}>
                Title3 Regular Quaternary
              </SubHeadline>
            </div>

            <div>
              <h3>Bold</h3>
              <SubHeadline weight={"bold"} type={"primary"}>
                Title3 Regular Primary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"secondary"}>
                Title3 Regular Secondary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"tertiary"}>
                Title3 Regular Tertiary
              </SubHeadline>
              <SubHeadline weight={"bold"} type={"quaternary"}>
                Title3 Regular Quaternary
              </SubHeadline>
            </div>
          </Flex>
        </div>
      </YStack>
    </div>
  );
};

export { TypographyPage };
