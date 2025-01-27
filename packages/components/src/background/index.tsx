import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { primaryBaseBackgroundCss } from "@nightfall-ui/css";

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nth(array: any[], index: number) {
  return array[index];
}

function length(array: any[]) {
  return array.length;
}

const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`;

const createAnimation = () => {
  const particleSize = "20vmin";
  const animationDuration = 6;
  const amount = 20;
  const colors = ["#583c87", "#E45A84", "#FFACAC"];

  const cssstrings = css`
    --particleSize: ${particleSize};
    --animationDuration: ${animationDuration}s;
    --amount: ${amount};
    --blurRadius: calc((${Math.random} + 0.5) * var(--particleSize) * 0.5);
    --x: ${Math.random() > 0.5 ? -1 : 1};

    span {
      width: var(--particleSize);
      height: var(--particleSize);
      border-radius: var(--particleSize);
      backface-visibility: hidden;
      position: absolute;
      animation-name: ${move};
      animation-duration: var(--animationDuration);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      ${primaryBaseBackgroundCss};
    }

    ${() => {
      let str = "";
      const direction = Math.random() > 0.5 ? "normal" : "reverse";

      for (let i = 0; i <= amount; ++i) {
        str =
          str +
          `
        span:nth-child(${i}) {
          top: calc(${random(1, 100)} * 1%);
          left: calc(${random(1, 100)} * 1%);
          
          animation-direction: ${direction};
          
          animation-duration: ${
            random(animationDuration, animationDuration * 10) / 10 + 10
          }s; 
          animation-delay: -${
            random(animationDuration, (animationDuration + 10) * 10) / 10
          }s;
          
          transform-origin: calc((${random(1, 50)} - 25) * 1vw) calc((${random(
            1,
            50
          )} - 25) * 1vh);
          
          box-shadow: calc((var(--particleSize) * 2 * var(--x))) 0 var(--blurRadius) ${nth(
            colors,
            random(1, length(colors))
          )};
    }
      `;
      }
      return str;
    }};
  `;

  return cssstrings;
};

/*
*
*   ${({ colors, amount, animationDuration }) => {
    let str = "";
    const direction = random() > 0.5 ? "normal" : "reverse";

    for (let i = 0; i <= amount; i++) {
      console.log({ i });
      str =
        str +
        `
        span:nth-child(${i}) {
          top: calc(${random(100)} * 1%);
          left: calc(${random(100)} * 1%);

          animation-direction: ${direction};

          animation-duration: ${random(animationDuration * 10) / 10 + 10}s;
          animation-delay: -${random((animationDuration + 10) * 10) / 10}s;

          transform-origin: calc((${random(50)} - 25) * 1vw) calc((${random(
          50
        )} - 25) * 1vh);

          box-shadow: calc((var(--size) * 2 * var(--x))) 0 var(--blurRadius) ${nth(colors, random(length(colors)))};
    }
      `;
    }
    return str;
  }};
* */

const direction1 = Math.random() > 0.5 ? "normal" : "reverse";
const direction2 = Math.random() > 0.5 ? "normal" : "reverse";
const direction3 = Math.random() > 0.5 ? "normal" : "reverse";
const direction4 = Math.random() > 0.5 ? "normal" : "reverse";
const direction5 = Math.random() > 0.5 ? "normal" : "reverse";

// https://codepen.io/Mamboleoo/pen/BxMQYQ
const BG = styled.div<{
  animationDuration: number;
  size: string;
}>`
  --animationDuration: ${({ animationDuration }) => animationDuration}s;
  --size: ${({ size }) => size};

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;

  ${primaryBaseBackgroundCss};

  span {
    mix-blend-mode: ${({ theme }) => {
      return theme.name === "light" ? "multiply" : "normal";
    }};
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
    box-shadow: -100vmin 0 13.45949872007388vmin #583c87;
  }

  span:nth-child(2) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction2};
    animation-duration: 235s;
    animation-delay: -55s;
    transform-origin: -2vw 5vh;
    box-shadow: -100vmin 0 12.600935575632098vmin #583c87;
  }

  span:nth-child(3) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction3};
    animation-duration: 205s;
    animation-delay: -90s;
    transform-origin: 5vw -14vh;
    box-shadow: -100vmin 0 13.058065316276275vmin #583c87;
  }

  span:nth-child(4) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction4};
    animation-duration: 110s;
    animation-delay: -53s;
    transform-origin: 7vw 1vh;
    box-shadow: 100vmin 0 13.429612868434376vmin #ffacac;
  }

  span:nth-child(5) {
    top: calc(${random(1, 100)} * 1%);
    left: calc(${random(1, 100)} * 1%);
    animation-direction: ${direction5};
    animation-duration: 138s;
    animation-delay: -40s;
    transform-origin: -20vw 23vh;
    box-shadow: -100vmin 0 13.333622007986907vmin #e45a84;
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
