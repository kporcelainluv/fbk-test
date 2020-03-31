import React from "react";
import styled from "styled-components";

import { breakpoint, fontFamily } from "../core/sc";

const navigation = [
  {
    name: "Новости",
    link: "#"
  },
  {
    name: "Вступить в Альянс",
    link: "#"
  },
  {
    name: "Частые вопросы",
    link: "#"
  },
  {
    name: "Помощь пациетам",
    link: "#"
  },
  {
    name: "Контакты",
    link: "#"
  }
];

const Nav = styled.nav`
  width: 100%;
  box-shadow: 0px 16px 60px rgba(157, 167, 217, 0.2);

  background-color: ${props => props.theme.colors.background};
  z-index: 2;
  margin-top: -2%;

  @media (min-width: ${breakpoint.tablet}) {
    margin: -1% 0 0 -1%;
    width: 207px;
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    flex-direction: row-reverse;
    margin-left: 0;
    width: 600px;
    box-shadow: none;
  }
  ${props => props.menuState} {
    display: block;
  }
  ${props => !props.menuState} {
    display: none;
  }

  @media (min-width: ${breakpoint.desktop}) {
    display: block;
    width: 700px;
    background-color: transparent;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0 0 0;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  li:first-child {
    background: linear-gradient(
      180deg,
      rgba(245, 246, 255, 1) 0%,
      rgba(255, 255, 255, 1) 20%
    );
  }
  @media (min-width: ${breakpoint.tablet}) {
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    padding-left: 20px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 0;

    li:first-child {
      background: none;
    }
  }
`;

const ListElement = styled.li`
  height: 48px;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props => props.theme.colors.background2};
  }
  @media (min-width: ${breakpoint.desktop}) {
    background: none;
    &:hover {
      background-color: transparent;
    }
    &:first-child {
      a {
        padding: 0;
      }
    }
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.small1};
  text-decoration: none;
  width: 100%;
  font-family: ${fontFamily.bold};
  padding: 10px 15px;
  @media (min-width: ${breakpoint.desktop}) {
    font-family: ${fontFamily.bold};
    padding: 0;
    margin-right: 20px;

    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`;

const NavigationElement = ({ link, text, index }) => {
  return (
    <ListElement>
      <Link href={link} tabIndex={index + 1}>
        {text}
      </Link>
    </ListElement>
  );
};

export const Navigation = ({ menuState }) => {
  return (
    <Nav menuState={menuState}>
      <List>
        {navigation.map((element, index) => {
          return (
            <NavigationElement
              key={element.name}
              link={element.link}
              text={element.name}
              index={index}
            />
          );
        })}
      </List>
    </Nav>
  );
};
