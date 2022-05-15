import styled from "styled-components";
import React, { FC } from "react";
import { color } from "@nightfall-ui/css";

const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  user-select: none;
  outline: none;
  height: 2.2rem;
  margin: 0.1rem 0.1rem;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      // background
      background-color: ${color("green.1")};
    }
    &:focus + span {
      // box-shadow: 0 0 1px #f39821;
    }
    &:checked + span:before {
      -webkit-transform: translateX(1.8rem);
      -ms-transform: translateX(1.8rem);
      transform: translateX(1.8rem);
    }
  }

  span {
    // background
    border-radius: 3rem;
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: ${color("background.base.tertiary")};
    -webkit-transition: 200ms;
    transition: 200ms;

    &:before {
      // toggle
      border-radius: 3rem;
      position: absolute;
      content: "";
      height: 1.8rem;
      width: 1.8rem;
      left: 0.2rem;
      top: 0.2rem;
      background-color: ${color("background.elevated.primary")};
      -webkit-transition: 200ms;
      transition: 200ms;
    }
  }
`;

const Toggle: FC<{
  label?: string;
  checked?: boolean;
  onChange?: () => void;
}> = ({ label, checked, onChange }) => {
  return (
    <StyledToggle aria-label={label}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span />
    </StyledToggle>
  );
};

export default Toggle;
