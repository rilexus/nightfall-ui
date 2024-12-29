import React, { useState } from "react";
import { Select, Option } from "@nightfall-ui/components";
import { Center } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const SelectPage = () => {
  const [value, setValue] = useState("cat");
  return (
    <Center small={80} medium={50}>
      <Title1 weight={"bold"} type={"primary"}>
        Select
      </Title1>
      <h4>Animals</h4>
      <Select onChange={(e: any) => setValue(e.target.value)} value={value}>
        <Option value={"cat"}>Cat</Option>
        <Option value={"dog"}>Dog</Option>
        <Option value={"mouse"}>Mouse</Option>
        <Option value={"horse"}>Horse</Option>
        <Option value={"long"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi
          corporis dolore eaque facere facilis fugiat, molestiae placeat, rerum
          soluta temporibus veniam voluptatem. Aut dolor doloribus quae quia,
          sint tempora?
        </Option>
      </Select>
    </Center>
  );
};

export { SelectPage };
