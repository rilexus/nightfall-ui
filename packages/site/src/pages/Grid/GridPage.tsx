import React from "react";
import { LargeTitle } from "@nightfall-ui/typography";
import { Center } from "@nightfall-ui/components";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
`;

const GridPage = () => {
  return (
    <Center sm={80} md={50}>
      <LargeTitle type={"primary"} weight={"bold"}>
        Grid
      </LargeTitle>
      <Grid></Grid>
    </Center>
  );
};

export default GridPage;
