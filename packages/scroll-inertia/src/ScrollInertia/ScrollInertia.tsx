import React, { CSSProperties, forwardRef, ReactNode, useMemo } from "react";

const useCSSStyle = (s: CSSProperties, deps: any[]) => {
  return useMemo(() => s, deps);
};

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
  let direction = 0;

  if (velocity > 0) {
    direction = 1;
  }
  if (velocity < 0) {
    direction = -1;
  }

  const isScrollingDown = direction === 1;
  const isScrollingUp = direction === -1;

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

  const s = useCSSStyle(
    {
      ...style,
      transition: `transform ${timeout}ms ease`,
      transform: `translateY(${translateY})`,
    },
    [translateY, timeout]
  );

  return (
    <div ref={ref} style={s}>
      {children}
    </div>
  );
});

export default ScrollInertia;
