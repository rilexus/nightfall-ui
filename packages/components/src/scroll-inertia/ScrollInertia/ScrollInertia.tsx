import React, { CSSProperties, forwardRef, ReactNode } from "react";

function mapValues(from: number, curr: number, to: number): number {
  if (curr <= from) return 0;
  if (curr >= to) return 1;
  return (curr - from) / (to - from);
}

function lerp(startValue: number, endValue: number, t: number): number {
  return startValue * (1 - t) + endValue * t;
}

const inertiaTranslation = ({
  velocity,
  translation,
  deltaSpeed,
}: {
  velocity: number;
  translation: number;
  deltaSpeed: [number, number];
}) => {
  const isScrollingDown = velocity > 0 ? 1 : 0;
  const isScrollingUp = !isScrollingDown;

  const mappedVelocity = mapValues(
    deltaSpeed[0],
    Math.abs(velocity),
    deltaSpeed[1]
  );

  const mappedTranslation = lerp(0, translation, mappedVelocity);

  return isScrollingDown
    ? `${mappedTranslation}px`
    : isScrollingUp
    ? `-${mappedTranslation}px`
    : "0px";
};

const ScrollInertia = forwardRef<
  any,
  {
    translation: number;
    deltaSpeed: [number, number];
    velocity: number;
    style?: CSSProperties;
    children: ReactNode;
    timeout?: number;
  }
>(function ScrollInertia(
  { children, translation, deltaSpeed, velocity, style, timeout = 120 },
  ref
) {
  const translateY = inertiaTranslation({
    velocity,
    translation: translation,
    deltaSpeed: deltaSpeed,
  });

  return (
    <div
      ref={ref}
      style={{
        ...style,
        transition: `transform ${timeout}ms ease`,
        transform: `translateY(${translateY})`,
      }}
    >
      {children}
    </div>
  );
});

export default ScrollInertia;
