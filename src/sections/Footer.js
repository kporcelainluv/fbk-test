import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";
import { Container } from "./Container";

import { breakpoint, fontFamily } from "../core/sc";

const documents = [
  "Устав профсоюза",
  "Свидетельство о регистрации",
  "Выписка из ЕГРЮЛ",
  "Федеральный закон о профсоюзах"
];

const Wrap = styled.footer`
  max-width: 90%;
  margin: 0 0 0 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 10px auto 0;
    padding-bottom: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Subheading = styled.span`
  line-height: 24px;
  margin-bottom: 10px;
`;

const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  a {
    display: flex;
    width: 177px;
    max-width: 100%;
    height: 60px;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.background};
    font-size: ${props => props.theme.fontSizes.small1};
    line-height: 24px;
    align-items: center;
    text-decoration: none;
    font-family: ${fontFamily.bold};
    justify-content: center;
    span {
      margin-left: 10px;
    }
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin-bottom: 28px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-bottom: 34px;
    a {
      width: 188px;
    }
  }
`;

const SubscribeBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  @media (min-width: ${breakpoint.tablet}) {
    margin-left: 66px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-left: 70px;
  }
`;

const secondColumn = "li:nth-of-type(3),li:nth-of-type(4)";

const DocumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  span {
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
    font-size: ${props => props.theme.fontSizes.small1};
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
    margin: 0 0 0 24px;
    ${secondColumn} {
      padding-left: 66px;
    }
  }
`;

const Organization = styled.span`
  opacity: 0.4;
  line-height: 26px;
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-top: 0;
  }
`;

const About = () => {
  return (
    <AboutBlock>
      <Subheading>Расскажите о нас:</Subheading>
      <a href="#">
        <Icon name="link-white" height="23" width="24" />
        <span>Поделиться</span>
      </a>
    </AboutBlock>
  );
};

const Subscribe = () => {
  return (
    <SubscribeBlock>
      <Subheading>Подписывайтесь:</Subheading>
      <Socials />
    </SubscribeBlock>
  );
};

const Documents = () => {
  return (
    <DocumentsBlock>
      <Subheading>Документы:</Subheading>
      <ul>
        {documents.map(document => {
          return (
            <li key={document}>
              <a href="#">{document}</a>
            </li>
          );
        })}
      </ul>
    </DocumentsBlock>
  );
};

export const Footer = () => {
  return (
    <Container>
      <Wrap>
        <About />
        <Subscribe />
        <Documents />
        <Organization>Альянс Врачей, 2020</Organization>
      </Wrap>
    </Container>
  );
};
