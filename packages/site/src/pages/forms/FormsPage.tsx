import React from "react";
import { PageTitle } from "../../components";
import {
  SquareFilledMediumInput,
  SquareFilledSmallInput,
} from "@nightfall-ui/forms";

const FormsPage = () => {
  return (
    <div>
      <PageTitle>Forms</PageTitle>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div>
          <div>
            <h4>Square Filled Medium Input</h4>
            <SquareFilledMediumInput placeholder={"Placeholder"} />
          </div>
          <div>
            <SquareFilledSmallInput placeholder={"Placeholder"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormsPage };
