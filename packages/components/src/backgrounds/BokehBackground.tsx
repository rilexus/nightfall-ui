import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import { primaryBaseBackgroundCss } from "@nightfall-ui/css";
import { useId } from "@nightfall-ui/hooks";

const defaultColors = ["#7229ee", "#f62a2a", "#ef2663"];
const color1 = ["rgb(13,242,143)", "rgb(0,0,255)"];

const themeName = (callback: (name: string) => any) => {
  return ({ theme }: any) => {
    return callback(theme.name);
  };
};

function nth(array: any[], index: number) {
  if (index > array.length - 1) {
    return array[array.length - 1];
  }
  if (index < 0) {
    return array[0];
  }
  return array[index];
}

function length(array: any[]) {
  return array.length;
}

const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function random<T>(min?: number | T[], max?: number): T | number {
  if (Array.isArray(min)) {
    return nth(min, random(0, min.length - 1));
  }
  if (min === undefined && max === undefined) {
    return Math.random();
  }
  if (min !== undefined && max === undefined) {
    // One argument was passed
    return random(0, min);
  }
  return randomInt(min, max);
}

const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`;

const Style = styled.div<{
  size: string;
  amount: number;
  colors: string[];
  animationDuration: number;
}>`
  --particleSize: ${({ size }) => size};
  --animationDuration: ${({ animationDuration }) => animationDuration}s;
  --amount: ${({ amount }) => amount};
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  inset: 0;
  z-index: -1;

  span {
    width: var(--particleSize);
    height: var(--particleSize);
    will-change: transform, transform3d;
    border-radius: var(--particleSize);
    backface-visibility: hidden;
    position: absolute;
    animation-name: ${move};
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    mix-blend-mode: ${themeName((name: string) => {
      return name === "light" ? "multiply" : "normal";
    })};
  }
  ${({ amount, colors, animationDuration }) => {
    let c = "";
    for (let i = 1; i <= amount; ++i) {
      c =
        c +
        `span:nth-child(${i}) {
          color: ${nth(colors, random(length(colors)))};
          top: calc(${random(75)} * 1%);
          left: calc(${random(75)} * 1%);
          animation-direction: ${Math.random() > 0.5 ? "normal" : "reverse"};
          animation-duration: calc((${random(
            animationDuration * 10
          )} / 10) * 1s + 10s);
          animation-delay: calc(${random(
            (animationDuration + 10) * 10
          )} / 10 * -1s);
          transform-origin: calc(${random(50) - 25} * .2vw) calc(${
          random(50) - 25
        } * 0.2vh);
        --blurRadius: calc(${random() + 0.5} * calc(var(--particleSize) * 0.5));
         --x: ${random() > 0.5 ? -1 : 1};
         box-shadow: calc(var(--particleSize) * 2 * var(--x)) 0 var(--blurRadius) currentColor;
        };`;
    }

    return c;
  }};
`;

// https://codepen.io/Mamboleoo/pen/BxMQYQ
const BokehBackground: FunctionComponent<{
  size?: string;
  amount?: number;
  colors?: string[];
}> = ({ size = "20vmin", amount = 20, colors = color1 }) => {
  const ownId = useId("Background");
  return (
    <Style size={size} amount={amount} colors={colors} animationDuration={20}>
      {Array.from({ length: amount }).map((_, idx) => {
        return <span key={`${ownId}-${idx}`} />;
      })}
    </Style>
  );
};
const bokehColors = {
  1: color1,
  2: defaultColors,
};

export { BokehBackground, bokehColors };
