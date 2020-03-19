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
`;
const Block = styled.div`
  margin: 0 16px 20px;
  padding: 0 16px;

  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 0 40px 20px;
    padding: 30px;
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
`;

const JoinParagraph = styled.p`
  margin-top: 0;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 288px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 310px;
  }
`;
const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 258px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
  }
`;

const List = styled.ul`
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};
  padding-left: 0;
  li:first-of-type {
    max-width: 230px;
  }

  li {
    max-width: 255px;
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
`;

const JoinBlock = styled.div`
  padding: 30px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 0 40px 20px;
    padding: 0;
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
  border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large2};
    font-family: "CoFo Sans";
    font-size: ${props => props.theme.fontSizes.large};
    letter-spacing: -0.02em;
    line-height: 44px;
    max-width: 585px;
    position: relative;
  }
`;

const RedText = styled.span`
  color: ${props => props.theme.colors.red};
`;

const Button = styled.button`
  width: 243px;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 249px;
  }
`;

const JoinCTABlock = () => {
  return (
    <JoinBlock>
      <Slogan>
        Профсоюз — это ваша <RedText>защита</RedText> и ваша{" "}
        <RedText>возможность улучшить условия</RedText> работы
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
