import React from "react";
import styled from "styled-components";
import { bodyBoldPrimaryCss, bodyRegularPrimaryCss } from "@nightfall-ui/theme";
import { textCenter } from "@nightfall-ui/css";

const Label = styled.div`
  ${textCenter};
  ${bodyRegularPrimaryCss};
`;

const LabelEmphasized = styled.div`
  ${textCenter};
  ${bodyBoldPrimaryCss};
`;

export { Label, LabelEmphasized };
