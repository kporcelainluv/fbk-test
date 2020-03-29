import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { breakpoint, fontFamily } from "../core/sc";

const Container = styled.section`
  border: 3px solid ${props => props.theme.colors.red};
  max-width: 90%;
  margin: 0 auto;
  padding: 8px 12px 0;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin-bottom: 30px;
    padding: 25px 30px 15px;
    border: 4px solid ${props => props.theme.colors.red};
  }
  @media (min-width: ${breakpoint.desktop}) {
    position: relative;
    margin-left: 50px;
    max-width: 540px;
  }
`;

const Wrap = styled.div`
  @media (min-width: ${breakpoint.tablet}) {
    margin-bottom: 15px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    position: absolute;
    left: 600px;
    width: 83%;
    top: 100px;
  }
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.bold};
  margin: 0 auto 13px;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;

  @media (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    font-family: ${fontFamily.regular};
    line-height: 44px;
    font-size: ${props => props.theme.fontSizes.large2};
    margin-top: 12px;
    span:last-child {
      padding-left: 6px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    flex-direction: column;
    span:last-child {
      padding: 0;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoint.tablet}) {
    display: block;
    margin-bottom: 15px;
  }
`;

const Link = styled.a`
  display: block;
  margin: 0 0 15px;
  line-height: 32px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
  max-width: 258px;
  @media (min-width: ${breakpoint.tablet}) {
    display: block;
    margin-bottom: 25px;
  }
`;

const Button = styled.button`
  width: 256px;
  max-width: 100%;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  margin: 15px 0;
  @media (min-width: ${breakpoint.tablet}) {
    width: 249px;
  }
`;
const SplitText = styled.br`
  @media (min-width: ${breakpoint.tablet}) {
    display: none;
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
          условия труда, высокие надбавки <SplitText /> и оплачиваемые
          переработки <SplitText /> для всех медиков России.
        </Paragraph>
        <Link href="#">Узнать больше о нас и о профсоюзах</Link>
        <Socials />
      </Wrap>
      <Button>Вступить в Альянс врачей</Button>
    </Container>
  );
};
