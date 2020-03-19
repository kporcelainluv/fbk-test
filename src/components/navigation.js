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

const visuallyHidden = `
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    padding-left: 20px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
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
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  box-shadow: -3px 20px 10px 17px rgba(245, 246, 255, 0.49);
  background-color: ${props => props.theme.colors.background};
  z-index: 2;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-left: 5%;
    width: 207px;
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    margin-left: 24%;
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
    ${visuallyHidden}
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
