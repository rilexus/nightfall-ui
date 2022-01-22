import React from "react";
import {
  TextButton,
  ExtraLargeTextButton,
  LargeTextButton,
  SmallSquareButton,
  LargeSquareButton,
  ExtraLargeSquareButton,
} from "@nightfall-ui/buttons";
import styled from "styled-components";
import { mx37 } from "@nightfall-ui/theme";
import { SmallTextButton, MediumSquareButton } from "@nightfall-ui/buttons";
import { regularNormal2XLCss } from "@nightfall-ui/typography";
import { Hr } from "../../components";

const HorizontalSpacer = styled.span`
  ${mx37};
`;

const H2 = styled.h2`
  ${regularNormal2XLCss}
`;

const ButtonsPage = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <H2>Text Buttons</H2>
        <div>
          <SmallTextButton>Click</SmallTextButton>
          <HorizontalSpacer />
          <TextButton>Click</TextButton>
          <HorizontalSpacer />
          <LargeTextButton>Click</LargeTextButton>
          <HorizontalSpacer />
          <ExtraLargeTextButton>Click</ExtraLargeTextButton>
        </div>
      </div>
      <Hr />
      <div>
        <H2>Square Buttons</H2>
        <SmallSquareButton>Click</SmallSquareButton>
        <HorizontalSpacer />
        <MediumSquareButton>Click</MediumSquareButton>
        <HorizontalSpacer />
        <LargeSquareButton>Click</LargeSquareButton>
        <HorizontalSpacer />
        <ExtraLargeSquareButton>Click</ExtraLargeSquareButton>
      </div>
    </div>
  );
};

export { ButtonsPage };
