import React from "react";
import styled from "styled-components";
import { textCenter } from "@nightfall-ui/css";
import { bodyBoldPrimaryCss, bodyRegularPrimaryCss } from "../body";

const Label = styled.div`
  ${textCenter};
  ${bodyRegularPrimaryCss};
`;

const LabelEmphasized = styled.div`
  ${textCenter};
  ${bodyBoldPrimaryCss};
`;

export { Label, LabelEmphasized };
