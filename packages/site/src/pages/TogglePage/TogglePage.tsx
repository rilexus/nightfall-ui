import React, { useReducer } from "react";
import { Center } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";
import { Toggle } from "@nightfall-ui/components";

const TogglePage = () => {
  const [checked1, toggle1] = useReducer((s) => !s, false);
  const [checked2, toggle2] = useReducer((s) => !s, true);
  return (
    <Center sm={80} md={50}>
      <Title1 type={"primary"} weight={"bold"}>
        Toggle
      </Title1>
      <div>
        <div>
          <Toggle label={"toggle1"} onChange={toggle1} checked={checked1} />
        </div>
        <div>
          <Toggle label={"toggle2"} onChange={toggle2} checked={checked2} />
        </div>
      </div>
    </Center>
  );
};

export default TogglePage;
