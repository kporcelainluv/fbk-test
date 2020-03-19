import React from "react";
import styled from "styled-components";

const reasons = [
  "Ни одного сотрудника, состоящего в профессиональном союзе, нельзя уволить, сократить или лишить заработной платы без ведома профсоюза.",
  "Представители профсоюза вправе приходить в учреждение, контролировать соблюдение законодательства и прав работников, оказывать всестороннюю поддержку членам профсоюза и заставлять администрацию устранять нарушения.",
  "Профсоюз может вносить изменения в коллективный договор, инициировать коллективные переговоры, изменять порядок начисления зарплаты, размер отпусков, условия труда."
];

const Container = styled.div`
  margin-top: 20px;

  padding-top: 15px;
  background-color: ${props => props.theme.colors.background2};
`;
const Block = styled.div`
  margin: 0 13px 0 20px;
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
  margin-top: 12px;
  font-size: ${props => props.theme.fontSizes.small};
  max-width: 258px;
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 600px;
    margin-bottom: 10px;
  }
`;

const List = styled.ul`
  padding-left: 0px;
  margin-top: 24px;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};

  li:first-of-type {
    max-width: 230px;
  }

  li {
    max-width: 255px;
    list-style-type: none;
    margin-bottom: 25px;
  }
  li:last-of-type {
    margin-bottom: 15px;
  }
  span {
    padding-right: 5px;
  }
`;

const JoinBlock = styled.div`
  margin: 0 13px 0 20px;
`;

const Slogan = styled.h3`
  margin: 15px 0;
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  color: ${props => props.theme.colors.main};
`;
const BreakingText = styled.span`
  display: inline-block;
`;
const Red = styled.span`
  color: ${props => props.theme.colors.red};
`;

const BreakingLine = styled.div`
  border: 2px dashed ${props => props.theme.colors.lightGrey};
`;

const JoinText = styled.p`
  margin: 18px 0 8px;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
`;

const Button = styled.button`
  width: 243px;
  height: 60px;
  margin: 10px auto 15px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 24px auto;
    width: 249px;
  }
`;

export const Reasons = () => {
  return (
    <Container>
      <Block>
        <Heading>Зачем нужен профсоюз?</Heading>
        <Paragraph>
          Объединившись, вы сможете эффективно сопротивляться любому произволу
          работодателя. Согласно Федеральному закону о профсоюзах:
        </Paragraph>
        <List>
          {reasons.map((reason, index) => {
            return (
              <li key={index}>
                <span>{index + 1}.</span>
                {reason}
              </li>
            );
          })}
        </List>
      </Block>
      <JoinBlock>
        <Slogan>
          Профсоюз —{" "}
          <BreakingText>
            это ваша <Red>защита</Red>{" "}
            <BreakingText>
              {" "}
              и ваша <Red>возможность улучшить условия</Red> работы
            </BreakingText>
          </BreakingText>
        </Slogan>
        <BreakingLine></BreakingLine>
        <JoinText>
          Вступайте в независимый профсоюз медицинских работников «Альянс
          врачей»!
        </JoinText>
        <Button>Вступить в Альянс врачей</Button>
      </JoinBlock>
    </Container>
  );
};
