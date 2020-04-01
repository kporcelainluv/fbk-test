import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";
import { breakpoint, fontFamily } from "../core/sc";

const contacts = [
  {
    name: "Анастасия Васильева",
    title: "Председатель профсоюза",
    fullTitle: "Председатель профсоюза, врач офтальмолог",
    img: "./imgs/anastasia1.png",
    webp: "./imgs/webp/anastasia1.webp",
    email: "help@alyansvrachey.org"
  },
  {
    name: "Анастасия Тарабрина",
    title: "Заместитель председателя",
    fullTitle: "Заместитель председателя профсоюза",
    img: "./imgs/anastasia2.png",
    webp: "./imgs/webp/anastasia2.webp",
    tel: "+7 (919) 464-11-56",
    email: "tarabrina@alyansvrachey.org"
  },
  {
    name: "Иван Коновалов",
    title: "Пресс-секретарь",
    fullTitle: "Пресс-секретарь профсоюза",
    img: "./imgs/ivan.png",
    webp: "./imgs/webp/ivan.webp",
    tel: "+7 (929) 673-00-31",
    email: "press@alyansvrachey.org"
  },
  {
    name: "Ирина Кваско",
    title: "Руководитель пациентского проекта",
    fullTitle: "Руководитель пациентского проекта",
    img: "./imgs/irina.png",
    webp: "./imgs/webp/irina.webp",
    tel: "+7 (909) 342-54-53",
    email: "patients@alyansvrachey.org"
  }
];

const Container = styled.section`
  max-width: 90%;
  margin: 0 auto 35px;
  @media (min-width: ${breakpoint.tablet}) {
    margin: 40px auto 35px;
    max-width: 688px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin-bottom: 28px;
  }
`;
const Heading = styled.h2`
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;
  max-width: 200px;
  margin: 0 0 10px;

  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    max-width: 600px;
    margin-bottom: 15px;
  }
`;

const Image = styled.picture`
  img {
    height: 76px;
    width: 76px;
    margin-right: 16px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    img {
      height: 142px;
      width: 142px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    img {
      height: 100px;
      width: 100px;
    }
  }
`;

const JobTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.small1};
  color: ${props => props.theme.colors.grey};
  line-height: 20px;

  span:first-child {
    display: block;
  }
  span:last-child {
    display: none;
  }
  @media (min-width: ${breakpoint.tablet}) {
    span:first-child {
      display: none;
    }
    span:last-child {
      display: block;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: -163px 0 135px 0;
    display: flex;
    flex-direction: column;
    max-width: 187px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 40px;
  }
`;

const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.small3};
  line-height: 22px;
  margin: 0 0 6px;
  @media (min-width: ${breakpoint.tablet}) {
    margin: 4px 0 18px;
    font-family: ${fontFamily.regular};
    font-size: ${props => props.theme.fontSizes.medium};
  }
  @media (min-width: ${breakpoint.desktop}) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ContactContainer = styled.li`
  display: flex;
  padding: 22px 0 20px;

  &:not(:last-of-type) {
    border-bottom: 2px dashed ${props => props.theme.colors.grey};
  }
  &:last-of-type {
    padding-bottom: 0;
  }

  a:not(:last-of-type) {
    margin-right: 18px;
  }
  a span:nth-child(2) {
    display: none;
  }
  span {
    display: block;
  }
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    padding: 30px 0 29px;
    svg {
      display: none;
    }
    span {
      line-height: 22px;
    }
    a {
      color: ${props => props.theme.colors.red};
      display: flex;
      margin-bottom: 10px;
    }
    a span:nth-child(2) {
      display: block;
    }
    div {
      margin: 8px 0 0 10px;
    }
    &:first-of-type {
      div {
        margin: 25px 0 0 10px;
      }
    }
  }

  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    &:not(:last-of-type) {
      border-bottom: none;
    }
    div {
      margin: 0;
    }
    &:first-of-type {
      div {
        margin: 0;
      }
    }
  }
`;

const ContactsBlock = styled.div`
  padding: 16px;
  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${breakpoint.tablet}) {
    padding: 22px 30px 32px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 507px;
    margin: 63px 0 67px;
    padding: 38px 40px 35px;
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small1};
  line-height: 24px;
  max-width: 100%;
  padding: 0;
  margin: 0 0 14px;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 410px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: 0 0 19px;
  }
`;

const ActionBlock = styled.div`
  display: flex;
  margin-bottom: 17px;
  align-items: center;
  a {
    color: ${props => props.theme.colors.red};
    padding-left: 10px;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin-right: 20px;
  }
`;

const ActionWrap = styled.div`
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    margin-bottom: 8px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    flex-direction: column;
  }
`;

const AboutWrap = styled.div``;

const Contact = ({ contact }) => {
  const { img, webp, title, fullTitle, name, tel, email } = contact;

  return (
    <ContactContainer>
      <Image>
        <source srcSet={webp} type="image/webp" />
        <img src={img} alt={"Фото " + name} />
      </Image>
      <AboutWrap>
        <JobTitle>
          <span>{title}</span>
          <span>{fullTitle}</span>
        </JobTitle>
        <Name>{name}</Name>
        <a href={"mailto: " + email}>
          <span className="visually-hidden">Написать письмо</span>
          <span>{email}</span>
          <Icon height="24" width="24" name="mail" />
        </a>
        {tel && (
          <a href={"tel: " + tel}>
            <span className="visually-hidden">Позвонить</span>
            <span>{tel}</span>
            <Icon height="25" width="25" name="tel" />
          </a>
        )}
      </AboutWrap>
    </ContactContainer>
  );
};

const ContactCTA = () => {
  return (
    <ContactsBlock>
      <Heading>Контакты</Heading>
      <Paragraph>
        Свяжитесь с нами, если у вас остались вопросы или есть предложение для
        нас.
      </Paragraph>
      <ActionWrap>
        <ActionBlock>
          <Icon height="24" width="24" name="mail" />
          <span className="visually-hidden">Написать письмо</span>
          <a href="mailto: help@alyansvrachey.org">help@alyansvrachey.org</a>
        </ActionBlock>
        <ActionBlock>
          <Icon height="25" width="25" name="tel" />
          <span className="visually-hidden">Позвонить</span>
          <a href="tel: +7 (999) 249-24-43">+7 (999) 249-24-43</a>
        </ActionBlock>
      </ActionWrap>
      <Socials />
    </ContactsBlock>
  );
};

const ContactList = () => {
  return (
    <List>
      {contacts.map(contact => {
        return <Contact key={contact.name} contact={contact} />;
      })}
    </List>
  );
};

export const Contacts = () => {
  return (
    <Container>
      <ContactCTA />
      <ContactList />
    </Container>
  );
};
