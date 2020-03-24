import React from "react";
import { Socials } from "./Socials";
import styled from "styled-components";
import { Icon } from "./Icon";

const documents = [
  "Устав профсоюза",
  "Свидетельство о регистрации",
  "Выписка из ЕГРЮЛ",
  "Федеральный закон о профсоюзах"
];

const Container = styled.section`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 17px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 40px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Share = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span:first-child {
    line-height: 24px;
    margin-bottom: 10px;
  }
  a {
    display: flex;
    max-width: 177px;
    height: 60px;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.background};
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 24px;
    align-items: center;
    text-decoration: none;
    font-family: "CoFo Sans Bold";
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
  }
  div > span {
    padding-left: 10px;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span {
    line-height: 24px;
    margin-bottom: 10px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-left: 66px;
  }
`;

const Documents = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
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
    margin-bottom: 10px;
  }
  a {
    color: ${props => props.theme.colors.red};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 530px;
    ul {
      display: flex;
      flex-direction: column;
      height: 80px;
      flex-wrap: wrap;
    }
    li:nth-of-type(3),
    li:nth-of-type(4) {
      padding-left: 40px;
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    li:nth-of-type(3),
    li:nth-of-type(4) {
      padding-left: 20px;
    }
    margin-left: 24px;
  }
`;

const Organization = styled.span`
  opacity: 0.4;
  line-height: 26px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

const Wrap = styled.div`
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 688px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 1120px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Share>
          <span>Расскажите о нас:</span>
          <a href="#">
            <div>
              <Icon name="link-white" height="23" width="24" />
              <span>Поделиться</span>
            </div>
          </a>
        </Share>
        <SignUp>
          <span>Подписывайтесь:</span>
          <Socials />
        </SignUp>
        <Documents>
          <h2>Документы:</h2>
          <ul>
            {documents.map(document => {
              return (
                <li key={document}>
                  <a href="#">{document}</a>
                </li>
              );
            })}
          </ul>
        </Documents>

        <Organization>Альянс Врачей, 2020</Organization>
      </Wrap>
    </Container>
  );
};
