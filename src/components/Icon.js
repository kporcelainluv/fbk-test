import React from "react";
import icons from "../img/icons/sprite.svg";

export const Icon = ({ height, width, name, viewbox }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={height}
      width={width}
      viewBox={viewbox ? viewbox : `0 0 ${height} ${width}`}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
