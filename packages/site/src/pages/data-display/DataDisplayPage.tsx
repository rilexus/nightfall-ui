import React, { useState } from "react";
import { AccordionUl, AccordionLi } from "@nightfall-ui/data-display";
import { Card } from "@nightfall-ui/surfaces";

const DataDisplayPage = () => {
  const [elems, setE] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  return (
    <div
      style={{
        color: "white",
      }}
    >
      <h1>Data Display</h1>
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
    </div>
  );
};

export { DataDisplayPage };
