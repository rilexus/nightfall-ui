import React, {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import styled from "styled-components";
import {
  regularPlatter,
  thickPlatter,
  thinPlatter,
  ultraThinPlatter,
} from "@nightfall-ui/css";
import { Card } from "../card";

const RegularPlatterCard = styled(Card)`
  ${regularPlatter};
`;

const ThickPlatterCard = styled(Card)`
  ${thickPlatter};
`;

const ThinPlatterCard = styled(Card)`
  ${thinPlatter};
`;

const UltraThinPlatterCard = styled(Card)`
  ${ultraThinPlatter};
`;

const PlatterCard: FunctionComponent<
  PropsWithChildren<{
    style?: CSSProperties;
    type?: "thin" | "thick" | "regular" | "ultra-thin";
  }>
> = ({ children, type = "regular", ...props }) => {
  switch (type) {
    case "regular":
      return <RegularPlatterCard {...props}>{children}</RegularPlatterCard>;
    case "thick":
      return <ThickPlatterCard {...props}>{children}</ThickPlatterCard>;
    case "thin":
      return <ThinPlatterCard {...props}>{children}</ThinPlatterCard>;
    case "ultra-thin":
      return <UltraThinPlatterCard {...props}>{children}</UltraThinPlatterCard>;
    default:
      return <RegularPlatterCard {...props}>{children}</RegularPlatterCard>;
  }
};

export {
  PlatterCard,
  UltraThinPlatterCard,
  RegularPlatterCard,
  ThickPlatterCard,
  ThinPlatterCard,
};
