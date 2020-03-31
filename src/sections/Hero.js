import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { breakpoint, fontFamily } from "../core/sc";

const Container = styled.section`
  max-width: 100%;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 0 auto 30px;
  }
`;

const ContainerWrap = styled.div`
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
    margin: auto 0;
    max-width: 540px;
    padding: 31px 34px 20px;
  }
`;

const Wrap = styled.div`
  @media (min-width: ${breakpoint.tablet}) {
    margin-bottom: 15px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    position: absolute;
    left: 577px;
    width: 84%;
    top: 50px;
  }
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.bold};
  margin: 0 auto 13px;
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;

  @media (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    font-family: ${fontFamily.regular};
    line-height: 44px;
    font-size: ${props => props.theme.fontSizes.large1};
    margin-top: 12px;
    span:last-child {
      padding-left: 6px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    flex-direction: column;
    margin-bottom: 19px;
    span:last-child {
      padding: 0;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 24px;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSizes.small1};
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
  font-size: ${props => props.theme.fontSizes.small1};
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
  @media (min-width: ${breakpoint.desktop}) {
    width: 278px;
    font-size: ${props => props.theme.fontSizes.small3};
  }
`;

export const Hero = () => {
  return (
    <Container>
      <ContainerWrap>
        <a>
          <img
            src="/icons/label.svg"
            height="60"
            width="160"
            alt="Логотип Альянса Врачей"
          />
        </a>
        <Heading>
          <span>Наша сила</span>
          <span>в объединении!</span>
        </Heading>
        <Wrap>
          <Paragraph>
            Профсоюз «Альянс врачей» защищает права медицинских работников по
            всей стране. Вместе мы боремся за справедливую заработную плату,
            достойные условия труда, высокие надбавки и оплачиваемые переработки
            для всех медиков России.
          </Paragraph>
          <Link href="#">Узнать больше о нас и о профсоюзах</Link>
          <Socials />
        </Wrap>
        <Button>Вступить в Альянс врачей</Button>
      </ContainerWrap>
    </Container>
  );
};
