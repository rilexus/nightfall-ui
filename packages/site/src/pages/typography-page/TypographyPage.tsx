import React from "react";
import styled from "styled-components";
import { bold2XLCss, bold4XLCss, boldXLCss } from "@nightfall-ui/typography";
import {
  Regular,
  RegularLG,
  RegularSM,
  Regular6XL,
  Regular7XL,
  Regular5XL,
  Regular4XL,
  RegularXL,
  Regular3XL,
  Regular2XL,
  Regular8XL,
  RegularXS,
} from "./regular.styled";
import { FontWeightExamples } from "./FontWeightExamples";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hr } from "../../components";
import { Focusable } from "../../components/focusable";

const H1 = styled.h1`
  margin: 4rem 0;
  ${bold4XLCss};
`;
H1.displayName = "H1";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const H2 = styled.h2`
  margin: 1rem 0;
  ${bold2XLCss};
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const H3 = styled.h3`
  margin: 0.5rem 0;
  ${boldXLCss};
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegularSizesExamples = () => {
  return (
    <div>
      <RegularXS>Regular XS </RegularXS>
      <RegularSM>Regular SM </RegularSM>
      <Regular>Regular</Regular>
      <RegularLG>Regular LG</RegularLG>
      <RegularXL>Regular XS </RegularXL>
      <Regular2XL>Regular 2XL </Regular2XL>
      <Regular3XL>Regular 3XL </Regular3XL>
      <Regular4XL>Regular 4XL </Regular4XL>
      <Regular5XL>Regular 5XL </Regular5XL>
      <Regular6XL>Regular 6XL </Regular6XL>
      <Regular7XL>Regular 7XL </Regular7XL>
      <Regular8XL>Regular 8XL </Regular8XL>
    </div>
  );
};

const TypographyPage = () => {
  return (
    <div
      style={{
        width: "700px",
        margin: "0 auto",
        color: "white",
      }}
    >
      <Focusable id={"typography-title"}>
        <H1>Typography</H1>
      </Focusable>
      <div>
        <div>
          <FontWeightExamples />
        </div>
        {/*<div>*/}
        {/*  <H2>Regular</H2>*/}
        {/*  <Hr />*/}
        {/*  <H3>Sizes</H3>*/}
        {/*  <RegularSizesExamples />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export { TypographyPage };
