import React from "react";
import styled from "styled-components";

import { Help } from "./Help";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 0;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
  }
`;
const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  margin: 12px 0 15px;
  max-width: 248px;
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  margin: 0 16px;
  padding-top: 6px;
  padding-left: 13px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
  }
`;

const List = styled.ul`
  padding-left: 30px;
  list-style-type: none;
`;
const Element = styled.li`
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
`;

const BreakingText = styled.span`
  display: block;
`;

export const FAQ = () => {
  return (
    <Container>
      <Block>
        <Heading>Частые вопросы</Heading>
        <Paragraph>
          Независимые профсоюзы — новое явление для нашей страны. С ним связано
          множество тонкостей и нюансов, в которых трудно разобраться. Ниже мы
          постарались ответить на самые частые вопросы о профсоюзах в целом и
          «Альянсе врачей» в частности.
        </Paragraph>
      </Block>
      <List>
        <Element>
          <a href="">
            Почему нельзя просто вступить{" "}
            <BreakingText> в профсоюз, а важно создать ППО?</BreakingText>
          </a>
        </Element>
        <Element>
          <a href="">
            Как я найду людей для регионального отделения, если моих коллег всё
            устраивает?
          </a>
        </Element>
        <Element>
          <a href="">А меня не уволят?</a>
        </Element>
        <Element>
          <a href="">Кто стоит за «Альянсом врачей»?</a>
        </Element>
        <Element>
          <a href="">На что идут профсоюзные взносы?</a>
        </Element>
        <Element>
          <a href="">
            {" "}
            В моей больнице уже есть профсоюз, можно ли создать ещё один?
          </a>
        </Element>
        <Element>
          <a href="">
            Я уже состою в профсоюзе, и он никак мне не помогает. Чем вы лучше?
          </a>
        </Element>
        <Element>
          <a href="">Как устроен профсоюз?</a>
        </Element>
      </List>
      <Help />
    </Container>
  );
};
