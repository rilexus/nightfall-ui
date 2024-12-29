import React, { useState } from "react";
import { AccordionUl, AccordionLi } from "@nightfall-ui/components";
import { Card } from "@nightfall-ui/components";
import { Center } from "@nightfall-ui/components";
import { Title1 } from "@nightfall-ui/typography";

const DataDisplayPage = () => {
  const [elems, setE] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  return (
    <Center small={80} medium={50}>
      <Title1 weight={"bold"} type={"primary"}>
        Data Display
      </Title1>
      <div>
        <AccordionUl
          style={{
            height: "350px",
          }}
        >
          {elems.map((e) => {
            return (
              <AccordionLi key={e}>
                <Card
                  onClick={() => {
                    setE(elems.filter((i) => i !== e));
                  }}
                  style={{
                    marginBottom: ".5rem",
                  }}
                >
                  {e}
                </Card>
              </AccordionLi>
            );
          })}
        </AccordionUl>
      </div>
    </Center>
  );
};

export { DataDisplayPage };
