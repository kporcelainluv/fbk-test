import React from "react";
import styled from "styled-components";

import { Theme } from "./Theme";
import GlobalFonts from "./fonts/fonts";

const H = styled.h1`
  font-family: "CoFo Sans";
  color: ${props => `${props.theme.colors.red}`};
`;

export const App = () => {
  return (
    <Theme>
      <GlobalFonts />
      <H>Hello world</H>
    </Theme>
  );
};
