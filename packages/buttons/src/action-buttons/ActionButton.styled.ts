import styled from "styled-components";
import {
  cursorPointer,
  flex,
  itemsCenter,
  justifyCenter,
  outlineNone,
} from "@nightfall-ui/css";
import { buttonScaleTransition } from "../css";

const StyledActionButton = styled.button<{ color: string }>`
  height: 2.75rem;
  flex: 1;
  ${flex};
  ${justifyCenter};
  ${itemsCenter};
  background: transparent;
  border: none;
  ${outlineNone};
  ${buttonScaleTransition};
  ${cursorPointer};
`;

export { StyledActionButton };
