import React from "react";
import styled from "styled-components";

import { breakpoint, fontFamily } from "../core/sc";

const problems = [
  "— по несколько недель ждать записи к нужному специалисту;",
  "— стоять в многочасовых очередях;",
  "— покупать лекарства за свой счёт;",
  " — страдать от непрофессионального поведения некоторых специалистов;",
  "— становиться жертвами врачебных ошибок."
];

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 6px 15px;
  max-width: 90%;
  margin: 0 auto 33px;
  @media (min-width: ${breakpoint.tablet}) {
    padding: 14px 32px;
    max-width: 688px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    padding: 28px 40px 20px;
  }
`;

const Heading = styled.h2`
  margin: 0 0 15px 0;
  font-family: ${fontFamily.bold};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  max-width: 200px;
  padding-top: 10px;
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    max-width: 600px;
    margin-bottom: 15px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.large2};
  }
`;

const Problems = styled.ul`
  padding-left: 0;
  list-style-type: none;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  margin: 0;

  li {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  li:last-child {
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
    padding-bottom: 20px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    max-width: 100%;
    li {
      max-width: 100%;
    }
    li:last-child {
      padding-bottom: 25px;
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    height: 140px;
    max-width: 561px;
    margin-bottom: 13px;
    li:first-child {
      max-width: 430px;
    }

    li:nth-child(3) {
      padding-bottom: 10px;
    }

    li:nth-child(n + 4):nth-child(-n + 6) {
      margin-left: 110px;
    }
    li:last-child {
      border-bottom: none;
    }
  }
`;

const Subheading = styled.h3`
  line-height: 22px;
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium};
  max-width: 98%;
  margin-bottom: 13px;

  a {
    color: ${props => props.theme.colors.red};
    padding-left: 3px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.subheading};
    max-width: 624px;
    line-height: 26px;
    margin: 16px 0 18px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    font-family: ${fontFamily.regular};
    max-width: 624px;
    line-height: 26px;
    margin: 30px 0 18px;
  }
`;

const DottedLine = styled.div`
  @media (min-width: ${breakpoint.desktop}) {
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
  }
`;
export const Help = () => {
  return (
    <Container>
      <Heading>Помощь пациентам</Heading>
      <Problems>
        <li>
          От развала здравоохранения страдают не только медицинские работники,
          но и пациенты. Многим из них приходится:
        </li>
        {problems.map(problem => {
          return <li key={problem}>{problem}</li>;
        })}
      </Problems>
      <DottedLine />
      <Subheading>
        Если вы или ваши близкие столкнулись с проблемами при получении
        медицинской помощи, пишите нам на
        <a href="mailto: patients@alyansvrachey.org">
          patients@alyansvrachey.org
        </a>
      </Subheading>
    </Container>
  );
};
