import React from "react";
import styled from "styled-components";

import { Theme } from "./Theme";
import GlobalFonts from "./fonts/fonts";
import { Navigation } from "./components/navigation";
import { Icon } from "./components/Icon";

import { navigation } from "./consts";

const MOBILE = "768px";
const TABLET = "992px";
const DESKTOP = "1200px";

const Container = styled.div`
  box-sizing: border-box;
  max-width: 768px;
  font-family: "Cofo Sans";
  @media (min-width: ${TABLET}) {
    max-width: 992px;
  }
  @media (min-width: ${DESKTOP}) {
    max-width: 1200px;
  }
`;

const HeaderBar = styled.div`
  color: green;
`;

export const App = () => {
  return (
    <Theme>
      <GlobalFonts />
      <div style={{ display: "none" }}>
        <include src="./img/icons/sprite.svg" />
      </div>
      <Container>
        <header>
          <nav>
            <Navigation elements={navigation} />
          </nav>
          <HeaderBar>
            <button>
              <span>Открыть меню</span>
            </button>
            <Icon name="link" height="23" width="22" />
            <Icon name="rouble" height="24" width="24" />
          </HeaderBar>
        </header>
      </Container>
    </Theme>
  );
};
