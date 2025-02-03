import React, { useState } from "react";
import { Select } from "@nightfall-ui/components";
import { Center } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const SelectPage = () => {
  const [value, setValue] = useState("cat");
  return (
    <Center sm={80} md={50}>
      <Title1 weight={"bold"} type={"primary"}>
        Select
      </Title1>
      <h4>Animals</h4>
      <Select onChange={(e: any) => setValue(e.target.value)} value={value}>
        <Select.Option value={"cat"}>Cat</Select.Option>
        <Select.Option value={"dog"}>Dog</Select.Option>
        <Select.Option value={"mouse"}>Mouse</Select.Option>
        <Select.Option value={"horse"}>Horse</Select.Option>
        <Select.Option value={"long"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi
          corporis dolore eaque facere facilis fugiat, molestiae placeat, rerum
          soluta temporibus veniam voluptatem. Aut dolor doloribus quae quia,
          sint tempora?
        </Select.Option>
      </Select>
    </Center>
  );
};

export { SelectPage };
