import React, { FC, HTMLAttributes } from "react";
import { Ease } from "react-transitions-library";
import { Theme } from "@nightfall-ui/themes";

// const descending = ([, a]: [string, number], [, b]: [string, number]) =>
//   a > b ? -1 : 1;

type GrindItemProps = { [Key in keyof Theme["breakpoints"]]?: number } & {
  timeout?: number;
  ease?: Ease;
  delay?: number;
  default?: number;
};

const GridItem: FC<GrindItemProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ["default"]: _default = 100,
  timeout = 200,
  ease = Ease.easeIn,
  delay = 0,
  ...props
}) => {
  return <div>{children}</div>;
};
interface GridComposition {
  Item: typeof GridItem;
}

const Grid: FC<HTMLAttributes<HTMLDivElement>> & GridComposition = ({
  children,
  ...props
}) => {
  return <div>{children}</div>;
};

Grid.Item = GridItem;
Grid.Item.displayName = "GridItem";

export { Grid };
