import React from "react";
import icons from "../img/icons/sprite.svg";
import styled from "styled-components";

const Svg = styled.svg`
  margin: 0 10px;
`;

export const Icon = props => {
  const { height, width, name } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      width={width}
    >
      <use xlinkHref={`${icons}#${name}`} />
    </Svg>
  );
};
