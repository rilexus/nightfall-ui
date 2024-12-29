import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  regularPlatter,
  thickPlatter,
  thinPlatter,
  ultraThinPlatter,
} from "@nightfall-ui/css";

const StyledRegularPlatter = styled.div`
  ${regularPlatter};
`;

const StyledThickPlatter = styled.div`
  ${thickPlatter};
`;
const StyledThinPlatter = styled.div`
  ${thinPlatter};
`;

const StyledUltraThinPlatter = styled.div`
  ${ultraThinPlatter};
`;

const Platter: FC<
  {
    type: "regular" | "thick" | "thin" | "ultra-thin";
  } & HTMLAttributes<HTMLDivElement>
> = ({ type, ...props }) => {
  switch (type) {
    case "regular": {
      //@ts-ignore
      return <StyledRegularPlatter {...props} />;
    }
    case "thick": {
      //@ts-ignore
      return <StyledThickPlatter {...props} />;
    }
    case "thin": {
      //@ts-ignore
      return <StyledThinPlatter {...props} />;
    }
    default: {
      //@ts-ignore
      return <StyledUltraThinPlatter {...props} />;
    }
  }
};

export { Platter };
