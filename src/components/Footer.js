import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";

import { breakpoint, fontFamily } from "../core/sc";

const documents = [
  "Устав профсоюза",
  "Свидетельство о регистрации",
  "Выписка из ЕГРЮЛ",
  "Федеральный закон о профсоюзах"
];

const Container = styled.footer`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (min-width: ${breakpoint.tablet}) {
    padding: 5%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Organization = styled.span`
  opacity: 0.4;
  line-height: 26px;
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin-top: 0;
  }
`;

const Wrap = styled.div`
  max-width: 90%;
  margin: 0 0 0 5%;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const BlockWrap = styled.div`
  &:first-of-type {
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;

    span:first-child {
      line-height: 24px;
      margin-bottom: 10px;
    }
    a {
      display: flex;
      width: 177px;
      max-width: 100%;
      height: 60px;
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.background};
      font-size: ${props => props.theme.fontSizes.small};
      line-height: 24px;
      align-items: center;
      text-decoration: none;
      font-family: ${fontFamily.bold};
      justify-content: center;
    }
    div {
      display: flex;
      align-items: center;
    }
    div > span {
      padding-left: 10px;
    }

    @media (min-width: ${breakpoint.tablet}) {
      margin-bottom: 28px;
    }
    @media (min-width: ${breakpoint.tablet}) {
      margin-bottom: 34px;
      a {
        width: 188px;
      }
    }
  }

  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;

    span {
      line-height: 24px;
      margin-bottom: 10px;
    }
    @media (min-width: ${breakpoint.tablet}) {
      margin-left: 66px;
    }
  }
  &:last-of-type {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    span {
      line-height: 24px;
      font-size: ${props => props.theme.fontSizes.small};
      margin: 0 0 10px 0;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
    }
    li {
      margin-bottom: 7px;
    }
    a {
      color: ${props => props.theme.colors.red};
      font-size: ${props => props.theme.fontSizes.small};
      line-height: 24px;
    }
    @media (min-width: ${breakpoint.tablet}) {
      width: 530px;
      ul {
        display: flex;
        flex-direction: column;
        height: 80px;
        flex-wrap: wrap;
      }
    }
    @media (min-width: ${breakpoint.desktop}) {
      margin-bottom: 0;
      li:nth-of-type(3),
      li:nth-of-type(4) {
        padding-left: 66px;
      }
      margin-left: 24px;
    }
  }
`;

const Block = ({ heading, children }) => {
  return (
    <BlockWrap>
      <span>{heading}</span>
      {children}
    </BlockWrap>
  );
};

export const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Block heading="Расскажите о нас:">
          <a href="#">
            <div>
              <Icon name="link-white" height="23" width="24" />
              <span>Поделиться</span>
            </div>
          </a>
        </Block>
        <Block heading="Подписывайтесь:">
          <Socials />
        </Block>
        <Block heading="Документы:">
          <ul>
            {documents.map(document => {
              return (
                <li key={document}>
                  <a href="#">{document}</a>
                </li>
              );
            })}
          </ul>
        </Block>

        <Organization>Альянс Врачей, 2020</Organization>
      </Wrap>
    </Container>
  );
};
