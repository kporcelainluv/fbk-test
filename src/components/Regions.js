import React, { useState } from "react";
import styled from "styled-components";

const regions = [
  { letter: " ", regions: ["Москва", "Московская область", "Санкт-Петербург"] },
  { letter: "А", regions: ["Архангельская область", "Астраханская область"] },
  { letter: "Е", regions: ["Еврейская АО "] },
  { letter: "Е", regions: ["Еврейская АО "] },
  { letter: "И", regions: ["Ивановская область"] },
  {
    letter: "К",
    regions: [
      "Камчатский край",
      "Краснодарский край",
      "Красноярский край",
      "Курганская область"
    ]
  },
  { letter: "М", regions: ["Магаданская область"] },
  { letter: "Н", regions: ["Новгородская область", "Новосибирская область"] },
  { letter: "О", regions: ["Оренбургская область"] },
  { letter: "П", regions: ["Пермский край", "Приморский край"] },
  {
    letter: "Р",
    regions: ["Республика Дагестан", "Республика Крым", "Рязанская область"]
  },
  {
    letter: "С",
    regions: [
      "Самарская область ",
      "Саратовская область",
      "Свердловская область"
    ]
  },
  { letter: "Т", regions: ["Томская область", "Тюменская область"] },
  { letter: "Х", regions: ["Хабаровский край"] },
  { letter: "Ч", regions: ["Челябинская область"] },
  { letter: "Я", regions: ["Ярославская область"] }
];

const visuallyHidden = ` position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;`;
const Container = styled.div`
  padding: 30px 16px;
  background-color: ${props => props.theme.colors.background2};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px;
  }
`;

const IntroBlock = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding: 16px;
`;

const Heading = styled.h2`
  max-width: 256px;
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 24px;
`;

const Paragraph = styled.p`
  max-width: 266px;
  line-height: 24px;

  a {
    color: ${props => props.theme.colors.red};
  }
`;

const RegionsList = styled.ul`
  padding-left: 15px;
  list-style-type: none;

  h3 {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 24px;
    color: ${props => props.theme.colors.lightGrey};
  }

  &:last-of-type {
    display: ${props => (props.displayed ? "none" : "block")};
    opacity: ${props => (props.displayed ? "0" : "1")};
  }
`;

const Region = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small};

  li {
    padding-bottom: 8px;
  }
  a {
    color: ${props => props.theme.colors.main};
  }
`;

const Block = styled.div``;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 30px;
  padding: 10px;
  position: relative;

  span {
    line-height: 32px;
    color: ${props => props.theme.colors.red};
  }

  &:before {
    content: "";
    position: absolute;
    top: 17px;
    left: -16px;
    height: 16px;
    width: 15px;
  }
  &:first-of-type {
    display: ${props => (props.displayed ? "block" : "none")};
    &:before {
      background-image: url("./icons/arrow-down.svg");
    }
  }
  &:last-of-type {
    display: ${props => (props.displayed ? "none" : "block")};
    &:before {
      background-image: url("./icons/arrow-up.svg");
    }
  }
`;

export const RegionsBlock = ({ regions, displayed }) => {
  return (
    <RegionsList displayed={displayed}>
      {regions.map((region, index) => {
        return (
          <li key={region.letter + index}>
            <h3>{region.letter}</h3>
            <Region>
              {region.regions.map(r => {
                return (
                  <li key={r}>
                    <a href="">{r}</a>{" "}
                  </li>
                );
              })}
            </Region>
          </li>
        );
      })}
    </RegionsList>
  );
};

const RegionsDescription = () => {
  return (
    <IntroBlock>
      <Heading>Региональные отделения</Heading>
      <Paragraph>
        Сейчас у нас 28 отделений по всей стране. Если в вашем регионе ещё нет
        отделения «Альянса врачей», мы поможем его создать.{" "}
        <a href="#">Заполните анкету</a>, и мы с вами свяжемся
      </Paragraph>
    </IntroBlock>
  );
};

const RegionsContainer = () => {
  const [state, changeState] = useState({ show: true });
  const regionsBefore = regions.filter((elm, index) => index < 6);
  const regionsAfter = regions.filter((elm, index) => index > 5);
  return (
    <Block>
      <RegionsBlock regions={regionsBefore} displayed={state.show} />
      <Button
        type="button"
        displayed={state.show}
        onClick={() => changeState(s => ({ show: !s.show }))}
      >
        <span>Показать все отделения</span>
      </Button>
      <RegionsBlock regions={regionsAfter} displayed={state.show} />
      <Button
        type="button"
        displayed={state.show}
        onClick={() => changeState(s => ({ show: !s.show }))}
      >
        <span>Скрыть</span>
      </Button>
    </Block>
  );
};

export const Regions = () => {
  return (
    <Container>
      <RegionsDescription />
      <RegionsContainer />
    </Container>
  );
};
