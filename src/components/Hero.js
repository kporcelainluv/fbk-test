import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Socials } from "./Socials";

const Container = styled.div`
  margin: 0 16px;
  padding-top: 16px;
  padding-left: 13px;
  border: 2px solid ${props => props.theme.colors.red};
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
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 242px;
  margin-bottom: 0;
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
`;

export const Hero = () => {
  return (
    <Container>
      <Icon name="label" height="50" />
      <h1 className="visually-hidden">Альянс врачей</h1>
      <Heading>
        Наша сила <br />в объединении!
      </Heading>
      <Paragraph>
        Профсоюз «Альянс врачей» защищает права медицинских работников по всей
        стране. Вместе мы боремся за справедливую заработную плату, достойные
        условия труда, высокие надбавки <br /> и оплачиваемые переработки <br />
        для всех медиков России.
      </Paragraph>
      <Link>Узнать больше о нас и о профсоюзах</Link>
      <Socials />
      <Button>Вступить в Альянс врачей</Button>
    </Container>
  );
};
