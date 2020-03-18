import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  margin: 33px 15px 10px 19px;
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  max-width: 200px;
  padding-top: 16px;
  padding-left: 15px;
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;

  max-width: 270px;
  padding-left: 15px;
  margin: 13px 0 0 0;
`;

const Problems = styled.ul`
  padding-left: 13px;
  list-style-type: none;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  margin: 0;

  li {
    margin: 0;
    padding: 0;
    max-width: 261px;
  }
`;
const BreakingLine = styled.div`
  border: 1px dashed ${props => props.theme.colors.lightGrey};
  margin: 20px;
`;

const Subheading = styled.h3`
  line-height: 22px;
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: 16px;
  max-width: 235px;

  a {
    color: ${props => props.theme.colors.red};
    padding-left: 3px;
  }
`;

export const Help = () => {
  return (
    <Container>
      <Heading>Помощь пациентам</Heading>
      <Paragraph>
        От развала здравоохранения страдают не только медицинские работники, но
        и пациенты. Многим из них приходится:
      </Paragraph>
      <Problems>
        <li>— по несколько недель ждать записи к нужному специалисту;</li>
        <li>— стоять в многочасовых очередях; </li>
        <li>— покупать лекарства за свой счёт; </li>
        <li>
          — страдать от непрофессионального поведения некоторых специалистов;{" "}
        </li>
        <li>— становиться жертвами врачебных ошибок.</li>
      </Problems>
      <BreakingLine></BreakingLine>
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
