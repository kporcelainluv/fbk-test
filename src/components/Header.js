import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Navigation } from "./Navigation";
import { breakpoint } from "../core/sc";

const ESC_KEY_CODE = 27;

const Container = styled.section`
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: auto;
    background: none;
  }
  @media (min-width: ${breakpoint.desktop}) {
    flex-direction: row-reverse;
    max-width: 1120px;
    margin: auto;
  }
`;

const Menu = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 45px;
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSizes.nav};
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
  margin: 0 9px;
  padding: 0;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 20px 10px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin-right: 0;
    li:first-of-type {
      margin-right: 23px;
    }
    a {
      padding: 15px 10px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-right: 0;
    display: flex;

    li:first-child {
      a {
        color: orange;
        display: flex;
        user-focus: 5;
      }
      span {
        color: orange;
        display: flex;
        user-focus: 5;
      }
    }
    li:last-child {
      a {
        display: flex;
        user-focus: 6;
      }
      span {
        color: pink;
        display: flex;
        user-focus: 6;
      }
    }
  }
`;

const Description = styled.span`
  display: none;
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.nav};
  line-height: 32px;
  @media (min-width: ${breakpoint.tablet}) {
    display: inline-block;
    margin-left: 10px;
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
        <a href="#">
          <Icon name="link" height="23" width="22" />
          <Description>Поделиться</Description>
        </a>
      </li>
      <li>
        <a href="#">
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
