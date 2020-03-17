import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";

const Container = styled.div`
  margin: 0 16px;
  padding-top: 6px;
  padding-left: 13px;
  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    margin-top: 19px;
    margin-right: 65px;
    padding-top: 22px;
    padding-left: 27px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    flex-direction: row;
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    margin-top: 15px;
    span:last-of-type {
      padding-left: 6px;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 242px;
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
    margin-bottom: 10px;
  }
`;

const Link = styled.a`
  margin: 0;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
  border-bottom: 1px solid ${props => props.theme.colors.red};
`;

const Button = styled.button`
  width: 256px;
  height: 60px;
  margin: 10px auto 15px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 27px auto;
    width: 249px;
  }
`;

export const Hero = () => {
  return (
    <Container>
      <div>
        <img src="/icons/label.svg" height="60" width={"160"} alt="" />
        <h1 className="visually-hidden">Альянс врачей</h1>
        <Heading>
          <span>Наша сила</span>
          <span>в объединении!</span>
        </Heading>
        <Paragraph>
          Профсоюз «Альянс врачей» защищает права медицинских работников по всей
          стране. Вместе мы боремся за справедливую заработную плату, достойные
          условия труда, высокие надбавки и оплачиваемые переработки для всех
          медиков России.
        </Paragraph>
        <Link>Узнать больше о нас и о профсоюзах</Link>
        <Socials />
        <Button>Вступить в Альянс врачей</Button>
      </div>
    </Container>
  );
};
