import React from "react";
import styled from "styled-components";

import { Help } from "./Help";

const questions = [
  "Почему нельзя просто вступить в профсоюз, а важно создать ППО?",
  "Как я найду людей для регионального отделения, если моих коллег всё устраивает?",
  "А меня не уволят?",
  "Кто стоит за «Альянсом врачей»?",
  "На что идут профсоюзные взносы?",
  " В моей больнице уже есть профсоюз, можно ли создать ещё один?",
  "Я уже состою в профсоюзе, и он никак мне не помогает. Чем вы лучше?",
  "Как устроен профсоюз?"
];

const Container = styled.div`
  background-color: ${props => props.theme.colors.background2};
  padding: 0 15px 20px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px 40px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    padding: 60px 0px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    font-family: "CoFo Sans";
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  max-width: 248px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 624px;
    padding-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 420px;
  }
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding-left: 15px;
  max-width: 96%;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    max-width: 688px;
    margin: 20px auto;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    width: 507px;
    margin: 0 7%;
  }
`;

const SplitText = styled.br`
  ${props => !props.first} {
    display: block;
  }
  ${props => !props.second} {
    display: none;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    ${props => !props.first} {
      display: none;
    }

    ${props => !props.second} {
      display: block;
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 15px;
  max-width: 288px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 678px;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 250px;
    margin: 50px 0 0 7%;
  }
`;
const Question = styled.li`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: 24px;

  &:before {
    content: "\\25AA";
    color: ${props => props.theme.colors.red};
    display: inline-block;
    width: 15px;
    margin-left: -14px;
  }
  a {
    color: ${props => props.theme.colors.main};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    margin: 0 0 25px 0;
    max-width: 470px;
  }
`;

export const FAQ = () => {
  return (
    <Container>
      <Block>
        <Heading>Частые вопросы</Heading>
        <Paragraph>
          Независимые профсоюзы — новое явление для нашей страны. С ним связано
          множество тонкостей <SplitText first /> и нюансов, в которых трудно
          разобраться. Ниже мы постарались ответить <SplitText second /> на
          самые частые вопросы о профсоюзах в целом и «Альянсе врачей» в
          частности.
        </Paragraph>
      </Block>
      <List>
        {questions.map(question => {
          return (
            <Question key={question}>
              <a href="">{question}</a>
            </Question>
          );
        })}
      </List>
      <Help />
    </Container>
  );
};
