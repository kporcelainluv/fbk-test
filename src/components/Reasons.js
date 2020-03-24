import React from "react";
import styled from "styled-components";

const reasons = [
  "Ни одного сотрудника, состоящего в профессиональном союзе, нельзя уволить, сократить или лишить заработной платы без ведома профсоюза.",
  "Представители профсоюза вправе приходить в учреждение, контролировать соблюдение законодательства и прав работников, оказывать всестороннюю поддержку членам профсоюза и заставлять администрацию устранять нарушения.",
  "Профсоюз может вносить изменения в коллективный договор, инициировать коллективные переговоры, изменять порядок начисления зарплаты, размер отпусков, условия труда."
];

const Container = styled.div`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 0;
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: flex;
    justify-content: space-around;
  }
`;
const Block = styled.div`
  margin: 0 16px 20px;
  padding: 0 12px;

  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px;
    max-width: 688px;
    margin: auto;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    padding: 30px;
    max-width: 507px;
    margin: auto;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  margin-top: 12px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    font-family: "CoFo Sans";
    line-height: 44px;
    span:last-of-type {
      padding-left: 6px;
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-family: "CoFo Sans Bold";
  }
`;

const JoinParagraph = styled.p`
  margin-top: 0;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 100%;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 310px;
  }
`;
const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 100%;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
  }
`;

const List = styled.ul`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  padding-left: 0;
  li:first-of-type {
    max-width: 89%;
  }

  li {
    max-width: 99%;
    list-style-type: none;
    margin-bottom: 20px;
  }

  span {
    font-family: "CoFo Sans Bold";
    padding-right: 5px;
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    li,
    li:first-of-type {
      max-width: 620px;
    }
  }

  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    li,
    li:first-of-type {
      max-width: 414px;
    }
    li:nth-of-type(2) {
      max-width: 389px;
    }
  }
`;

const JoinBlock = styled.div`
  margin: 0 16px 20px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
    top: 165px;
    width: 100%;
    left: 0;
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 688px;
    margin: 20px auto;
    padding: 0;
    &:after {
      top: 150px;
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 540px;
    &:after {
      top: 200px;
    }
  }
`;
const SplitText = styled.br`
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: none;
  }
`;
const Slogan = styled.h3`
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  margin-top: 0;
  color: ${props => props.theme.colors.main};
  padding-bottom: 20px;
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large2};
    font-family: "CoFo Sans";
    letter-spacing: -0.02em;
    line-height: 44px;
    max-width: 590px;
    mtposition: relative;
  }
`;

const RedText = styled.span`
  color: ${props => props.theme.colors.red};
`;

const Button = styled.button`
  max-width: 243px;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 249px;
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
      <ReasonsBlock />
      <JoinCTABlock />
    </Container>
  );
};
