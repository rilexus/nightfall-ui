import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import styled from "styled-components";
import {
  regularPlatter,
  thickPlatter,
  thinPlatter,
  ultraThinPlatter,
} from "@nightfall-ui/css";

const RegularPlatter = styled.div`
  ${regularPlatter};
`;

const ThickPlatter = styled.div`
  ${thickPlatter};
`;

const ThinPlatter = styled.div`
  ${thinPlatter};
`;

const UltraThinPlatter = styled.div`
  ${ultraThinPlatter};
`;

const Platter: ForwardRefExoticComponent<
  {
    type: "regular" | "thick" | "thin" | "ultra-thin";
  } & HTMLAttributes<HTMLDivElement>
> = forwardRef(({ type, ...props }, ref) => {
  switch (type) {
    case "ultra-thin": {
      //@ts-ignore
      return <UltraThinPlatter {...props} ref={ref} />;
    }
    case "thick": {
      //@ts-ignore
      return <ThickPlatter {...props} ref={ref} />;
    }
    case "thin": {
      //@ts-ignore
      return <ThinPlatter {...props} ref={ref} />;
    }
    case "regular": {
      //@ts-ignore
      return <RegularPlatter {...props} ref={ref} />;
    }
    default: {
      //@ts-ignore
      return <RegularPlatter {...props} ref={ref} />;
    }
  }
});

export { Platter, RegularPlatter, UltraThinPlatter, ThinPlatter, ThickPlatter };
