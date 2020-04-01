import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Navigation } from "./Navigation";
import { breakpoint } from "../core/sc";

const ESC_KEY_CODE = 27;

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: 94%;
  margin: auto;
  flex-wrap: wrap;

  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto 15px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    flex-direction: row-reverse;
    max-width: 1120px;
    margin: auto auto 60px;
  }
`;

const Menu = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 36px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.small2};
  line-height: 32px;
  position: relative;
  height: 57px;

  &:before {
    content: "";
    position: absolute;
    height: 15px;
    width: 20px;
    background-image: url("/icons/burger.svg");
    top: 21px;
    left: -27px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin-left: 30px;
  }

  @media (min-width: ${breakpoint.desktop}) {
    display: none;
  }
`;

const CTAContainer = styled.ul`
  display: flex;
  list-style-type: none;
  line-height: 32px;
  margin: -5px -4px;
  padding: 0;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 20px 10px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin: 0 0 0 60px;
    li:first-of-type a {
      margin-right: 32px;
    }
    a {
      padding: 15px 0;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-right: 0;
    display: flex;
  }
`;

const Description = styled.span`
  display: none;
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.small2};
  line-height: 32px;
  @media (min-width: ${breakpoint.tablet}) {
    display: inline-block;
    margin-left: 10px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-left: 5px;
  }
`;

const EmptyDiv = styled.div`
  width: 1px;
  @media (min-width: ${breakpoint.tablet}) {
    width: 100px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    display: none;
  }
`;

const CTABlock = () => {
  return (
    <CTAContainer>
      <li>
        <a href="https://alyansvrachey.ru/">
          <Icon name="link" height="23" width="22" />
          <Description>Поделиться</Description>
        </a>
      </li>
      <li>
        <a href="https://alyansvrachey.ru/">
          <Icon name="rouble" height="24" width="24" />
          <Description>Поддержать</Description>
        </a>
      </li>
    </CTAContainer>
  );
};

export const Header = () => {
  const [menu, updateMenu] = useState({ hidden: true });

  const handleKeyDown = e => {
    if (e.keyCode === ESC_KEY_CODE) {
      updateMenu(m => ({ hidden: !m.hidden }));
    }
  };

  return (
    <Container onKeyDown={handleKeyDown}>
      <Menu onClick={() => updateMenu(m => ({ hidden: !m.hidden }))}>Меню</Menu>
      <EmptyDiv />
      <CTABlock />
      <Navigation menuState={menu.hidden} />
    </Container>
  );
};
