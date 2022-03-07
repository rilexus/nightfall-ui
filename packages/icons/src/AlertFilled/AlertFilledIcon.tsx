import React from "react";

const AlertFilledIcon = ({
  height = "1rem",
  width = "1rem",
  viewBox = "0 0 512 512",
  stroke = "currentColor",
  fill = "currentColor",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth="0"
      viewBox={viewBox}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.94v-.05a21.74 21.74 0 1143.44 0z" />
    </svg>
  );
};

export { AlertFilledIcon };
