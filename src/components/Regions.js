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

const Container = styled.section`
  padding: 30px 16px;
  background-color: ${props => props.theme.colors.background2};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px;
  }
`;

const IntroBlock = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding: 6px;
  max-width: 288px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 507px;
    margin: 0 0 0 45px;
  }
`;

const Heading = styled.h2`
  max-width: 100%;
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 24px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-family: "CoFo Sans Bold";
    font-size: ${props => props.theme.fontSizes.large2};
    line-height: 44px;
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  max-width: 100%;
  line-height: 24px;

  a {
    color: ${props => props.theme.colors.red};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 95%;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 94%;
  }
`;

const RegionsList = styled.ul`
  padding-left: 0;
  list-style-type: none;

  h3 {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 24px;
    color: ${props => props.theme.colors.lightGrey};
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 920px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    height: 690px;
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

const Wrap = styled.div`
  max-width: 288px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 1120px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
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
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
   &:first-of-type, &:last-of-type {
    display: none
  }
`;

const RegionSegment = styled.li`
  &:nth-child(-n + 6) {
    display: block;
  }
  &:nth-child(n + 7) {
    display: ${props => (props.displayed ? "none" : "block")};
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    line-height: 24px;
    margin-bottom: 40px;
    &:nth-child(-n + 6) {
      display: block;
    }
    &:nth-child(n + 7) {
      display: block;
    }
  }
`;
const SplitText = styled.br`
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: none;
  }
`;

export const RegionsBlock = ({ regions, displayed }) => {
  return (
    <RegionsList>
      {regions.map((region, index) => {
        return (
          <RegionSegment displayed={displayed} key={region.letter + index}>
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
          </RegionSegment>
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
        отделения «Альянса врачей», мы поможем его создать. <SplitText />
        <a href="#">Заполните анкету</a>, и мы с вами свяжемся
      </Paragraph>
    </IntroBlock>
  );
};

const ToggleDisplay = ({ hide, text, onClick }) => {
  return (
    <Button type="button" displayed={hide} onClick={onClick}>
      <span>{text}</span>
    </Button>
  );
};

const RegionsContainer = () => {
  const [state, changeState] = useState({ hide: true });

  return (
    <Wrap>
      <RegionsBlock regions={regions} displayed={state.hide} />

      <ToggleDisplay
        hide={state.hide}
        text={"Показать все отделения"}
        onClick={() => changeState(s => ({ hide: !s.hide }))}
      />

      <ToggleDisplay
        hide={state.hide}
        text={"Скрыть"}
        onClick={() => changeState(s => ({ hide: !s.hide }))}
      />
    </Wrap>
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
