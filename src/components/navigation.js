import React from "react";
import styled from "styled-components";

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

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: -1% 0 0 0%;
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
  li:first-child {
    background: linear-gradient(
      180deg,
      rgba(245, 246, 255, 1) 0%,
      rgba(255, 255, 255, 1) 20%
    );
  }

  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: block;

    width: 595px;
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
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    padding-left: 20px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 0;
    li:first-child {
      a {
        color: yellow;
        display: flex;
        user-focus: 0;
      }
    }
    li:nth-child(2) {
      a {
        color: green;
        display: flex;
        order: 1;
      }
    }
    li:nth-child(3) {
      a {
        color: red;
        display: flex;
        order: 2;
      }
    }
    li:nth-child(4) {
      a {
        color: blue;
        display: flex;
        order: 3;
      }
    }
    li:nth-child(5) {
      a {
        color: violet;
        display: flex;
        order: 4;
      }
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
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    &:hover {
      background-color: transparent;
    }
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSizes.small};
  text-decoration: none;
  width: 100%;
  font-family: "CoFo Sans Bold";
  padding: 10px 15px;
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    font-family: "CoFo Sans";
    padding: 0 0 0 15px;
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`;

const NavigationElement = ({ link, text }) => {
  return (
    <ListElement>
      <Link href={link}>{text}</Link>
    </ListElement>
  );
};

export const Navigation = ({ menuState }) => {
  return (
    <Nav menuState={menuState}>
      <List>
        {navigation.map(element => {
          return (
            <NavigationElement
              key={element.name}
              link={element.link}
              text={element.name}
            />
          );
        })}
      </List>
    </Nav>
  );
};
