import React from "react";
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

export const RegionsBlock = ({ regions }) => {
  return (
    <RegionsList>
      {regions.map(region => {
        return (
          <li key={region.letter}>
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

const Block = styled.div`
  label {
    color: ${props => props.theme.colors.red};
    line-height: 32px;
    padding: 20px;
    margin-left: 20px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 25px;
      left: -10px;
      height: 16px;
      width: 15px;
    }
  }

  input {
    opacity: 0;
    outline: none;
  }
  input:focus {
    label[for="1"] {
      color: green;
    }
    color: yellow;
  }

  label:first-of-type {
    &:before {
      background-image: url("/icons/arrow-down.svg");
    }
  }
  label:last-of-type {
    &:before {
      background-image: url("/icons/arrow-up.svg");
    }
  }
  label:last-of-type {
    display: none;
  }

  input:not(:checked) ~ ul:last-of-type {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    opacity: 0;
  }
  input:checked ~ ul:last-of-type {
    display: block;
    transition: opacity 1s;
  }
  input:checked ~ ul:last-of-type ~ label:last-of-type {
    display: block;
  }
`;

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
  const regionsBefore = regions.filter((elm, index) => index < 6);
  const regionsAfter = regions.filter((elm, index) => index > 5);
  return (
    <Block>
      <RegionsBlock regions={regionsBefore} />
      <label htmlFor="1">
        <span>Показать все отделения</span>
      </label>
      <input type="checkbox" id={"1"} name={"1"} />
      <RegionsBlock regions={regionsAfter} />
      <label htmlFor="1">
        <span>Скрыть</span>
      </label>
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
