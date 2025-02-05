import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { primaryBaseBackgroundCss } from "@nightfall-ui/css";

const defaultColors = ["#583c87", "#ffacac", "#e45a84"];
const lightColors = ["#583c87", "#ffacac", "#e45a84"];
const darkColors = ["#1b0536", "#4f0c0c", "#590820"];

const themeName = (callback: (name: string) => any) => {
  return ({ theme }: any) => {
    return callback(theme.name);
  };
};

const color1 = ["rgb(8,49,71)", "rgb(238,70,48)", "rgb(235, 41, 37)"];
const appliedColors = defaultColors;

function nth(array: any[], index: number) {
  return array[index];
}

function length(array: any[]) {
  return array.length;
}

function random<T>(min?: number | T[], max?: number): T | number {
  if (Array.isArray(min)) {
    return nth(min, random(0, min.length - 1));
  }
  min = Math.ceil(min as number);
  max = Math.floor(max as number);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDarkColor() {
  return random(darkColors);
}

function randomLightColor() {
  return random(lightColors);
}

const randomColor = (name: string) => {
  return name === "light" ? randomLightColor() : randomDarkColor();
};

const randomColorBasedOnTheme = ({ theme }: { theme: { name: string } }) => {
  return randomColor(theme.name);
};

const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`;

const direction1 = Math.random() > 0.5 ? "normal" : "reverse";
const direction2 = Math.random() > 0.5 ? "normal" : "reverse";
const direction3 = Math.random() > 0.5 ? "normal" : "reverse";
const direction4 = Math.random() > 0.5 ? "normal" : "reverse";
const direction5 = Math.random() > 0.5 ? "normal" : "reverse";

/*
* 
* mix-blend-mode: ${themeName((name: string) => {
      return name === "light" ? "multiply" : "normal";
    })};
* */

// https://codepen.io/Mamboleoo/pen/BxMQYQ
const BG = styled.div<{
  animationDuration: number;
  size: string;
}>`
  --animationDuration: ${({ animationDuration }) => animationDuration}s;
  --size: ${({ size }) => size};

  pointer-events: none;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1000;

  ${primaryBaseBackgroundCss};

  span {
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    backface-visibility: hidden;
    position: absolute;
    animation: ${move};
    // animation-duration: var(--animationDuration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  span:nth-child(1) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-duration: 34s;
    animation-direction: ${direction1};
    animation-delay: -185s;
    transform-origin: 10vw 24vh;
    box-shadow: -100vmin 0 13.45949872007388vmin ${nth(appliedColors, 0)};
  }

  span:nth-child(2) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction2};
    animation-duration: 235s;
    animation-delay: -55s;
    transform-origin: -2vw 5vh;
    box-shadow: -100vmin 0 12.600935575632098vmin ${nth(appliedColors, 0)};
  }

  span:nth-child(3) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction3};
    animation-duration: 205s;
    animation-delay: -90s;
    transform-origin: 5vw -14vh;
    box-shadow: -100vmin 0 13.058065316276275vmin ${nth(appliedColors, 0)};
  }

  span:nth-child(4) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction4};
    animation-duration: 110s;
    animation-delay: -53s;
    transform-origin: 7vw 1vh;
    box-shadow: 100vmin 0 13.429612868434376vmin ${nth(appliedColors, 1)};
  }

  span:nth-child(5) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction5};
    animation-duration: 138s;
    animation-delay: -40s;
    transform-origin: -20vw 23vh;
    box-shadow: -100vmin 0 13.333622007986907vmin ${nth(appliedColors, 2)};
  }
`;

const Background = ({ animationDuration = 120, size = "80vmin" }) => {
  return (
    <BG animationDuration={animationDuration} size={size}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </BG>
  );
};

export { Background };
