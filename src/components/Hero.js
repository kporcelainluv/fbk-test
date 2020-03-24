import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";

const Container = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  margin: 0 16px 40px;
  padding: 0 15px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 688px;
    margin: 0 auto 40px;
    padding: 30px;
    border: 4px solid ${props => props.theme.colors.red};
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    position: relative;
    margin-left: 50px;
    max-width: 540px;
  }
`;

const Wrap = styled.div`
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    position: absolute;
    left: 600px;
    width: 83%;
    top: 100px;
  }
`;
const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: "CoFo Sans Bold";
  margin-top: 10px;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    flex-direction: row;
    font-family: "CoFo Sans";
    line-height: 44px;
    font-size: ${props => props.theme.fontSizes.large2};
    span:last-child {
      padding-left: 6px;
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    flex-direction: column;
    span:last-child {
      padding: 0;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin-top: 0;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
    display: block;
  }
`;

const Link = styled.a`
  display: block;
  margin: 0 0 20px;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
  max-width: 258px;
`;

const Button = styled.button`
  max-width: 256px;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  margin: 20px 0;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 249px;
  }
`;

export const Hero = () => {
  return (
    <Container>
      <a href="#">
        <img src="/icons/label.svg" height="60" width={"160"} alt="" />
      </a>
      <Heading>
        <span>Наша сила</span>
        <span>в объединении!</span>
      </Heading>
      <Wrap>
        <Paragraph>
          Профсоюз «Альянс врачей» защищает права медицинских работников по всей
          стране. Вместе мы боремся за справедливую заработную плату, достойные
          условия труда, высокие надбавки{" "}
          <span>и оплачиваемые переработки для всех медиков России.</span>
        </Paragraph>
        <Link href="#">Узнать больше о нас и о профсоюзах</Link>
        <Socials />
      </Wrap>
      <Button>Вступить в Альянс врачей</Button>
    </Container>
  );
};
