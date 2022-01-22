import styled from "styled-components";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useCSSProperties } from "@nightfall-ui/hooks";
import { Ease } from "react-transitions-library";

/**
 * Layover all elements in the container on top of each other.
 */
const AbsoluteContainer = styled.div`
  display: grid;
  & > * {
    grid-area: 1/1;
  }
`;
/**
 * Create 3x3 grid
 */
const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const getPressedValue = (value: number, percent: number): number => {
  if (value === 0) return 0;

  const percentValue = Math.abs((value / 100) * percent);
  if (value > 0) return value + percentValue;
  if (value < 0) return value - percentValue;
  return value;
};

// TODO: move out opacity mouse-over and down transition
const RotationTransition: FC<{
  deg?: number;
  perspective?: string;
  timeout?: number;
  delay?: number;
  ease?: Ease;
}> = ({
  children,
  ease = Ease.ease,
  delay = 0,
  deg = 10,
  perspective = "100px",
  timeout = 400,
}) => {
  const [rotate, setRotate] = useState([0, 0]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const reset = useCallback(() => {
    setIsMouseDown(() => false);
    setRotate(() => [0, 0]);
  }, [isMouseDown, rotate[0], rotate[1]]);

  const handleMouseEnter = useCallback(
    (e: any) => {
      const position = e.target.id;
      switch (position) {
        case "top left": {
          setRotate([deg, -deg]);
          return;
        }
        case "top center": {
          setRotate([deg, 0]);
          return;
        }
        case "top right": {
          setRotate([deg, deg]);
          return;
        }
        case "center left": {
          setRotate([0, -deg]);
          return;
        }
        case "center center": {
          setRotate([0, 0]);
          return;
        }
        case "center right": {
          setRotate([0, deg]);
          return;
        }
        case "bottom left": {
          setRotate([-deg, -deg]);
          return;
        }
        case "bottom center": {
          setRotate([-deg, 0]);
          return;
        }
        case "bottom right": {
          setRotate([-deg, deg]);
          return;
        }
        default: {
          return;
        }
      }
    },
    [deg]
  );
  const x = rotate[0];
  const y = rotate[1];
  const rotateX = useMemo(
    () => (isMouseDown ? getPressedValue(x, 25) : x),
    [isMouseDown, x]
  );
  const rotateY = useMemo(
    () => (isMouseDown ? getPressedValue(y, 25) : y),
    [isMouseDown, y]
  );

  const rotateStyle = useCSSProperties(
    {
      cursor: "pointer",
      userSelect: "none",
      display: "inline-block",
      transition: `
        transform ${timeout}ms ${ease} ${delay}ms
        `,
      transform: `
        perspective(${perspective}) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        `,
    },
    [rotateX, rotateY, timeout, ease, delay, perspective]
  );

  const onMouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const onMouseLeave = useCallback(() => {
    reset();
  }, [reset]);

  const selectNone = useCSSProperties(
    {
      WebkitUserSelect: "none",
      userSelect: "none",
    },
    []
  );

  return (
    <div style={rotateStyle} onTouchEnd={reset} onTouchCancel={reset}>
      <AbsoluteContainer>
        {children}
        <InnerGrid
          style={selectNone}
          onTouchEnd={reset}
          onTouchCancel={reset}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <div
            id={"top left"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"top center"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"top right"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />

          <div
            id={"center left"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"center center"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"center right"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />

          <div
            id={"bottom left"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"bottom center"}
            onTouchEnd={reset}
            onTouchCancel={reset}
            onTouchStart={handleMouseEnter}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
          <div
            id={"bottom right"}
            onTouchStart={handleMouseEnter}
            onTouchEnd={reset}
            onTouchCancel={reset}
            style={selectNone}
            onMouseOver={handleMouseEnter}
          />
        </InnerGrid>
      </AbsoluteContainer>
    </div>
  );
};

export { RotationTransition };
