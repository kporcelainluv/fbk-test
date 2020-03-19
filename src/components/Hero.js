import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";

const Container = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  margin: 0 16px 20px;
  padding: 0 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 0 40px 20px;
    padding: 30px;
    border: 4px solid ${props => props.theme.colors.red};
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  margin-top: 10px;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    span:last-of-type {
      padding-left: 6px;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin-top: 0;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 242px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
  }
`;

const Link = styled.a`
  display: block;
  margin: 0 0 20px;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
`;

const Button = styled.button`
  width: 256px;
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
      <div>
        <a href="#">
          <img src="/icons/label.svg" height="60" width={"160"} alt="" />
        </a>
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

        <Link href="#">Узнать больше о нас и о профсоюзах</Link>

        <Socials />
        <Button>Вступить в Альянс врачей</Button>
      </div>
    </Container>
  );
};
