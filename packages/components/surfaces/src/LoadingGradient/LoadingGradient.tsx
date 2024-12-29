import React, { ReactElement } from "react";

const LoadingGradient: React.FC<{
  width: string;
  height: string;
  viewBox: string;
  animate?: boolean;
  foregroundColor?: string;
  backgroundColor?: string;
  foregroundOpacity?: number;
  backgroundOpacity?: number;
  gradientRatio?: number;
  interval?: number;
  title?: string;
  timeout: number;
  animateBegin?: number;
  beforeMask?: ReactElement;
}> = ({
  animate = true,
  backgroundColor = "#f5f6f7",
  backgroundOpacity = 1,
  foregroundColor = "#eee",
  foregroundOpacity = 1,
  gradientRatio = 2,
  interval = 0.25,
  title = "Loading...",
  beforeMask = null,
  animateBegin,
  children,
  timeout,
  ...props
}) => {
  const fixedId = Math.random().toString(36).substring(6);

  const idClip = `${fixedId}-diff`;
  const idGradient = `${fixedId}-gradient`;
  const idAria = `${fixedId}-aria`;

  const keyTimes = `0; ${interval}; 1`;
  const dur = `${timeout}ms`;

  return (
    <svg aria-labelledby={idAria} role="img" {...props}>
      {title ? <title id={idAria}>{title}</title> : null}
      {beforeMask && React.isValidElement(beforeMask) ? beforeMask : null}
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(#${idClip})`}
        style={{ fill: `url(#${idGradient})` }}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio}; ${-gradientRatio}; 1`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={foregroundColor}
            stopOpacity={foregroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${
                  1 + gradientRatio / 2
                }`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`0; 0; ${1 + gradientRatio}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { LoadingGradient };
