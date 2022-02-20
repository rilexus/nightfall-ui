import React from "react";

const Checkmark = ({
  fill = "currentColor",
  stroke = "currentColor",
  height = "1em",
  width = "1em",
  viewBox = "0 0 24 24",
  strokeWidth = "0",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
    </svg>
  );
};

export { Checkmark };
