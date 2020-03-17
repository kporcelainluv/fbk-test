import React, { Fragment } from "react";
import styled from "styled-components";

import { Navigation } from "./Navigation";
import { navigation } from "../consts";
import { Icon } from "./Icon";

const HeaderBar = styled.div`
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
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    flex-direction: row-reverse;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 45px;
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    margin-left: 27%;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: none;
  }
`;
const Text = styled.span`
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.fontSizes.nav};
  line-height: 32px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 15px;
    width: 20px;
    background-image: url("/icons/burger.svg");
    top: 4px;
    left: -33px;
  }
`;

const IconContainer = styled.ul`
  margin-top: 17px;
  margin-right: 9px;
  display: flex;
  list-style-type: none;
  line-height: 32px;
  li {
    display: flex;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-top: 21px;
    margin-right: 67px;
    vertical-align: bottom;

    li:first-of-type {
      margin-right: 23px;
      vertical-align: bottom;
    }
  }
`;
const Nav = styled.nav`
  width: 100%;
  -webkit-box-shadow: -3px 20px 15px 20px rgba(245, 246, 255, 0.49);
  -moz-box-shadow: -3px 20px 10px 17px rgba(245, 246, 255, 0.49);
  box-shadow: -3px 20px 10px 17px rgba(245, 246, 255, 0.49);
  display: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-left: 5%;
    width: 207px;
    display: block;
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    margin-left: 24%;
  }
  @media (min-width: ${props => props.theme.breakPoints.smallDesktop}) {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 0;
    width: 600px;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

const SvgDescription = styled.span`
  display: none;
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.nav};
  line-height: 32px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: inline-block;
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

export const Header = () => {
  return (
    <Fragment>
      <HeaderBar>
        <Button>
          <Text>Меню</Text>
        </Button>
        <EmptyDiv />
        <IconContainer>
          <li>
            <Icon name="link" height="23" width="22" />
            <SvgDescription>Поделиться</SvgDescription>
          </li>
          <li>
            <Icon name="rouble" height="24" width="24" />
            <SvgDescription>Поддержать</SvgDescription>
          </li>
        </IconContainer>

        <Nav>
          <Navigation elements={navigation} />
        </Nav>
      </HeaderBar>
    </Fragment>
  );
};
