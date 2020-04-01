import React, { useState } from "react";
import styled from "styled-components";

import { breakpoint, fontFamily } from "../core/sc";
import { Icon } from "./Icon";
import { Container } from "./Container";

const regions = [
  { letter: " ", regions: ["Москва", "Московская область", "Санкт-Петербург"] },
  { letter: "А", regions: ["Архангельская область", "Астраханская область"] },
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


const IntroBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border: 3px solid ${props => props.theme.colors.red};
  padding: 3px 14px 0;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto 0;
    padding: 19px 27px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 507px;
    margin: 0;
    padding: 23px 33px;
  }
`;

const Heading = styled.h2`
  margin: 10px 0 0;
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;

  @media (min-width: ${breakpoint.tablet}) {
    font-family: ${fontFamily.bold};
    font-size: ${props => props.theme.fontSizes.large1};
    line-height: 44px;
    max-width: 100%;
    margin-bottom: 12px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-bottom: 16px;
  }
`;

const Paragraph = styled.p`
  margin-top: 7px;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};
  a {
    color: ${props => props.theme.colors.red};
  }
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 95%;
    margin-top: 0;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 94%;
  }
`;

const RegionsList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  margin-bottom: 15px;
  h3 {
    font-size: ${props => props.theme.fontSizes.small1};
    line-height: 24px;
    color: ${props => props.theme.colors.grey};
  }

  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 700px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    height: 550px;
    margin-top: 23px;
  }
`;

const Region = styled.ul`
  padding-left: 0;
  list-style-type: none;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes.small1};

  li {
    padding-bottom: 9px;
  }
  a {
    line-height: 24px;
    font-size: 15px;
    color: ${props => props.theme.colors.black};
  }
`;

const Wrap = styled.div`
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  line-height: 32px;
  color: ${props => props.theme.colors.red};
  padding: 0;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

const first6 = "-n + 6";
const last = "n + 6";

const RegionSegment = styled.li`
  &:nth-child(${first6}) {
    display: block;
  }
  &:nth-child(${last}) {
    display: ${props => (props.displayed ? "none" : "block")};
  }
  h3 {
    margin: 15px 0 7px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    line-height: 24px;
    margin-bottom: 15px;
    &:nth-child(${last}) {
      display: block;
      margin-left: 35px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    &:nth-child(n + 5) {
      display: block;
      margin-left: 35px;
    }
  }
`;
const SplitText = styled.br`
  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

const RegionsWrap = styled.div`
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin: 0 auto;
  }
`;

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

const RegionsContainer = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <Wrap>
      <RegionsList>
        {regions.map(region => {
          return (
            <RegionSegment displayed={showAll} key={region.letter}>
              <h3>{region.letter}</h3>
              <Region>
                {region.regions.map(r => {
                  return (
                    <li key={r}>
                      <a href="#">{r}</a>
                    </li>
                  );
                })}
              </Region>
            </RegionSegment>
          );
        })}
      </RegionsList>

      <Button type="button" onClick={() => setShowAll(s => !s)}>
        <Icon
          name={showAll ? "arrow-up" : "arrow-down"}
          height="16"
          width="16"
        />
        {showAll ? "Показать все отделения" : " Скрыть"}
      </Button>
    </Wrap>
  );
};

export const Regions = () => {
  return (
    <Container>
      <RegionsWrap>
        <RegionsDescription />
        <RegionsContainer />
      </RegionsWrap>
    </Container>
  );
};
