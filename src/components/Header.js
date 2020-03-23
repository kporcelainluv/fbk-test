import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Navigation } from "./Navigation";

const HeaderWrap = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  background: linear-gradient(
    0deg,
    rgba(245, 246, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%
  );

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    background: none;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    flex-direction: row-reverse;
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
    left: -24px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-left: 70px;
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    margin-left: 27%;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;

const IconContainer = styled.ul`
  display: flex;
  list-style-type: none;
  line-height: 32px;
  margin: 0 9px;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 20px 10px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-right: 40px;
    li:first-of-type {
      margin-right: 23px;
    }
    a {
      padding: 15px 10px;
    }
  }
`;

const SvgDescription = styled.span`
  display: none;
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.nav};
  line-height: 32px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: inline-block;
    margin-left: 10px;
  }
`;

const EmptyDiv = styled.div`
  width: 1px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 100px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;

const Icons = () => {
  return (
    <IconContainer>
      <li>
        <a href="#">
          <Icon name="link" height="23" width="22" />
          <SvgDescription>Поделиться</SvgDescription>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="rouble" height="24" width="24" />
          <SvgDescription>Поддержать</SvgDescription>
        </a>
      </li>
    </IconContainer>
  );
};

export const Header = () => {
  const [menu, updateMenu] = useState({ hidden: true });
  return (
    <HeaderWrap>
      <Menu onClick={() => updateMenu(m => ({ hidden: !m.hidden }))}>Меню</Menu>
      <EmptyDiv />
      <Icons />
      <Navigation menuState={menu.hidden} />
    </HeaderWrap>
  );
};
