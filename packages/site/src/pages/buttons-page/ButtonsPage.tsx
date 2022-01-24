import React from "react";
import {
  TextExtraLargeButton,
  TextLargeButton,
  FilledSquareSmallButton,
  FilledSquareLargeButton,
  FilledSquareExtraLargeButton,
  TextMediumButton,
} from "@nightfall-ui/buttons";
import styled from "styled-components";
import {
  TextSmallButton,
  FilledSquareMediumButton,
} from "@nightfall-ui/buttons";
import { regularNormal2XLCss } from "@nightfall-ui/typography";
import { Hr } from "../../components";
import { XStack } from "@nightfall-ui/layout/dist/src";

const H2 = styled.h2`
  ${regularNormal2XLCss}
`;

const ButtonsPage = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <H2>Text Buttons</H2>
        <XStack>
          <TextSmallButton>Click</TextSmallButton>
          <TextMediumButton>Click</TextMediumButton>
          <TextLargeButton>Click</TextLargeButton>
          <TextExtraLargeButton>Click</TextExtraLargeButton>
        </XStack>
      </div>
      <Hr />
      <div>
        <H2>Square Buttons</H2>
        <div>
          <XStack>
            <FilledSquareSmallButton>Click</FilledSquareSmallButton>

            <FilledSquareMediumButton>Click</FilledSquareMediumButton>

            <FilledSquareLargeButton>Click</FilledSquareLargeButton>

            <FilledSquareExtraLargeButton>Click</FilledSquareExtraLargeButton>
          </XStack>
        </div>
      </div>
    </div>
  );
};

export { ButtonsPage };
