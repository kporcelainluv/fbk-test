import React from "react";
import styled from "styled-components";

import { breakpoint, fontFamily } from "../core/sc";

const reasons = [
  "Ни одного сотрудника, состоящего в профессиональном союзе, нельзя уволить, сократить или лишить заработной платы без ведома профсоюза.",
  "Представители профсоюза вправе приходить в учреждение, контролировать соблюдение законодательства и прав работников, оказывать всестороннюю поддержку членам профсоюза и заставлять администрацию устранять нарушения.",
  "Профсоюз может вносить изменения в коллективный договор, инициировать коллективные переговоры, изменять порядок начисления зарплаты, размер отпусков, условия труда."
];

const Container = styled.section`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 0 12px;
  margin-bottom: 51px;
  @media (min-width: ${breakpoint.tablet}) {
    padding: 30px 0 40px;
    margin-bottom: 43px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    justify-content: space-around;
    padding: 30px 0 60px;
    margin-bottom: 60px;
  }
`;
const Block = styled.div`
  max-width: 90%;
  margin: 0 auto 20px;
  padding: 0 12px;

  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
  }
  @media (min-width: ${breakpoint.tablet}) {
    padding: 18px 30px 17px;
    margin: 0 auto 37px;
    max-width: 688px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 507px;
    padding: 26px 36px;
    margin: 0 auto;
  }
`;

const Heading = styled.h2`
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;
  margin: 18px auto 0;
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${fontFamily.regular};
    line-height: 44px;
    span:last-of-type {
      padding-left: 6px;
    }
  }
  @media (min-width: ${breakpoint.tablet}) {
    font-family: ${fontFamily.bold};
  }
`;

const JoinParagraph = styled.p`
  margin: 0 0 17px;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};
  max-width: 100%;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 310px;
    margin: 0 0 27px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 360px;
  }
`;
const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};
  max-width: 100%;
  margin-bottom: 24px;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 90%;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 100%;
  }
`;

const DottedLine = styled.div`
  border-bottom: 2px dashed ${props => props.theme.colors.grey};
  width: 100%;
  margin-bottom: 17px;
  @media (min-width: ${breakpoint.desktop}) {
    margin-bottom: 30px;
  }
`;

const List = styled.ul`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};
  padding-left: 0;
  li:first-of-type {
    max-width: 90%;
  }

  li {
    max-width: 100%;
    list-style-type: none;
    margin-bottom: 23px;
  }
  li:last-of-type {
    margin-bottom: 10px;
  }

  span {
    font-family: ${fontFamily.bold};
    padding-right: 5px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    li,
    li:first-of-type {
      max-width: 98%;
    }
  }

  @media (min-width: ${breakpoint.desktop}) {
    li,
    li:first-of-type {
      max-width: 420px;
    }
    li:nth-of-type(2) {
      max-width: 410px;
    }
  }
`;

const JoinBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 540px;
    margin: 40px 0 0 75px;
    &:after {
      top: 200px;
    }
  }
`;
const SplitText = styled.br`

  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }

  }
`;
const Slogan = styled.h3`
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;
  margin: 0 auto;
  color: ${props => props.theme.colors.black};
  padding-bottom: 16px;

  @media (min-width: ${breakpoint.tablet}) {
    margin: 0;
    padding-bottom: 27px;
    font-size: ${props => props.theme.fontSizes.large1};
    font-family: ${fontFamily.regular};
    letter-spacing: -0.02em;
    line-height: 44px;
    max-width: 590px;
    position: relative;
  }
  @media (min-width: ${breakpoint.desktop}) {
    padding-bottom: 31px;
  }
`;

const RedText = styled.span`
  color: ${props => props.theme.colors.red};
`;

const Button = styled.button`
  width: 246px;
  max-width: 100%;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${breakpoint.tablet}) {
    width: 249px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    width: 275px;
    font-size: ${props => props.theme.fontSizes.small3};
  }
`;

const Wrap = styled.div`
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
  }
`;

const JoinCTABlock = () => {
  return (
    <JoinBlock>
      <Slogan>
        Профсоюз — <SplitText /> это ваша <RedText>защита</RedText>{" "}
        <SplitText /> и ваша <RedText>возможность улучшить условия</RedText>{" "}
        работы
      </Slogan>
      <DottedLine />
      <JoinParagraph>
        Вступайте в независимый профсоюз медицинских работников «Альянс врачей»!
      </JoinParagraph>
      <Button>Вступить в Альянс врачей</Button>
    </JoinBlock>
  );
};

const ReasonsBlock = () => {
  return (
    <Block>
      <Heading>Зачем нужен профсоюз?</Heading>
      <Paragraph>
        Объединившись, вы сможете эффективно сопротивляться любому произволу
        работодателя. Согласно Федеральному закону о профсоюзах:
      </Paragraph>
      <List>
        {reasons.map((reason, index) => {
          return (
            <li key={reason}>
              <span>{index + 1}.</span>
              {reason}
            </li>
          );
        })}
      </List>
    </Block>
  );
};

export const Reasons = () => {
  return (
    <Container>
      <Wrap>
        <ReasonsBlock />
        <JoinCTABlock />
      </Wrap>
    </Container>
  );
};
