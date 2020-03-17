import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  //margin-top: 27px;
  margin-bottom: 0;

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
  padding-left: 15px;
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
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

export const Navigation = ({ elements }) => {
  return (
    <List>
      {elements.map(element => {
        return (
          <NavigationElement
            key={element.name}
            link={element.link}
            text={element.name}
          />
        );
      })}
    </List>
  );
};
