import React from "react";
import styled from "styled-components";

const problems = [
  "— по несколько недель ждать записи к нужному специалисту;",
  "— стоять в многочасовых очередях;",
  "— покупать лекарства за свой счёт;",
  " — страдать от непрофессионального поведения некоторых специалистов;",
  "— становиться жертвами врачебных ошибок."
];

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 0 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px;
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 1120px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  max-width: 200px;
  padding-top: 10px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    font-family: "CoFo Sans";
    max-width: 600px;
    margin-bottom: 20px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large2};
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  max-width: 256px;
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 624px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 442px;
  }
`;

const Problems = styled.ul`
  padding-left: 0;
  list-style-type: none;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  margin: 0;
  max-width: 256px;

  li {
    margin: 0;
    padding: 0;
    max-width: 261px;
  }

  li:last-child {
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
    padding-bottom: 20px;
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 624px;
    li {
      max-width: 624px;
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    height: 135px;
    max-width: 422px;
    li:nth-child(3) {
      padding-bottom: 10px;
    }
    li:last-child {
      border-bottom: none;
    }
  }
`;

const Subheading = styled.h3`
  line-height: 22px;
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.medium};
  max-width: 235px;
  padding-bottom: 16px;

  a {
    color: ${props => props.theme.colors.red};
    padding-left: 3px;
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.subheading};
    font-family: "CoFo Sans";
    max-width: 624px;
    line-height: 26px;
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
