import React from "react";
import styled from "styled-components";

import { Theme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header";
const Container = styled.div`
  box-sizing: border-box;
  max-width: 768px;
  font-family: "Cofo Sans";

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 992px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 1200px;
  }
`;

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />

      <Container>
        <header>
          <Header />
        </header>
      </Container>
    </Theme>
  );
};
