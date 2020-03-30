import React from "react";
import styled from "styled-components";

import { Help } from "./Help";
import { breakpoint, fontFamily } from "../core/sc";

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

const Container = styled.section`
  background-color: ${props => props.theme.colors.background2};
  padding: 33px 0 25px;

  @media (min-width: ${breakpoint.tablet}) {
    padding: 30px 40px 40px;
    margin-bottom: 42px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    padding: 60px 0;
  }
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding: 0 0 15px 15px;
  max-width: 90%;
  margin: auto;

  @media (min-width: ${breakpoint.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    max-width: 688px;
    padding: 18px 28px 0;
    margin: 10px auto 28px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    width: 507px;
    margin: 0 auto 40px 0;
    padding: 24px 20px 5px 35px;
  }
`;

const Heading = styled.h2`
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;
  margin: 13px 0 10px;
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    margin-bottom: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small1};
  line-height: 24px;
  max-width: 94%;
  margin: 0;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 100%;
    padding-bottom: 30px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 405px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 15px;
  max-width: 92%;
  margin: 15px auto 33px;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto;
    padding-left: 10px;
  }

  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 235px;
    margin: 0 auto 0 0;
  }
`;

const secondColumn = "&:nth-of-type(n + 5):nth-of-type(-n + 8) ";
const dotElement = "\\25AA";
const Question = styled.li`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};
  margin-bottom: 24px;

  &:before {
    content: ${dotElement};
    color: ${props => props.theme.colors.red};
    display: inline-block;
    width: 15px;
    margin-left: -14px;
  }
  a {
    color: ${props => props.theme.colors.black};
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin: 0 auto 24px;
    &:last-of-type {
      margin-bottom: 35px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: 0 0 24px 0;
    max-width: 470px;
    ${secondColumn} {
      margin-left: 112px;
    }
  }
`;

const Wrap = styled.div`
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 0 auto;
  }
`;

export const FAQ = () => {
  return (
    <Container>
      <Wrap>
        <Block>
          <Heading>Частые вопросы</Heading>
          <Paragraph>
            Независимые профсоюзы — новое явление для нашей страны. С ним
            связано множество тонкостей и нюансов, в которых трудно разобраться.
            Ниже мы постарались ответить на самые частые вопросы о профсоюзах в
            целом и «Альянсе врачей» в частности.
          </Paragraph>
        </Block>
        <List>
          {questions.map(question => {
            return (
              <Question key={question}>
                <a href="#">{question}</a>
              </Question>
            );
          })}
        </List>
        <Help />
      </Wrap>
    </Container>
  );
};
