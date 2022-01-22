import React from "react";
import {NormalButton} from "@nightfall-ui/buttons";
import {NormalInput} from "@nightfall-ui/forms";

const Home = () => {
  return (
    <div style={{
        color: 'white'
    }}>
        <NormalInput/>
        <NormalButton>Normal</NormalButton>
    </div>
  );
};

export { Home };
