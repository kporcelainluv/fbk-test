import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";

const Image = styled.img`
  height: 76px;
  width: 76px;
  margin-right: 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    height: 142px;
    width: 142px;
  }
`;

const JobTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightGrey};
  line-height: 20px;

  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 183px;
    display: block;
    margin-top: -200px;
    margin-bottom: 200px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 16px;
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: flex;
    flex-direction: row;
  }
`;

const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 22px;
  margin: 0 0 12px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-family: "CoFo Sans";
    font-size: ${props => props.theme.fontSizes.subheading};
  }
`;

const ContactContainer = styled.li`
  display: flex;
  padding: 24px 0;

  &:not(:last-of-type) {
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
  }

  a:not(:last-of-type) {
    margin-right: 18px;
  }
  a span:nth-child(2) {
    display: none;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: flex;
    max-width: 688px;
    margin: 0 auto 30px;
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
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
      border-bottom: none;
    }
  }
`;

const Container = styled.div`
  margin: 33px 15px 10px 19px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 30px 40px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  max-width: 200px;
  margin: 0 0 16px;

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    font-family: "CoFo Sans";
    max-width: 600px;
    margin-bottom: 20px;
  }
`;

const ContactsBlock = styled.div`
  padding: 16px;
  border: 3px solid ${props => props.theme.colors.red};
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    padding: 30px;
    max-width: 688px;
    margin: 0 auto 30px;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    max-width: 507px;
    margin: 50px 0 100px;
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  max-width: 255px;
  padding: 0;
  margin: 0 0 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 410px;
  }
`;

const ActionBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  a {
    color: ${props => props.theme.colors.red};
    padding-left: 10px;
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-right: 20px;
  }
`;

const ActionWrap = styled.div`
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    display: flex;
  }
  @media (min-width: ${props => props.theme.breakPoints.desktop}) {
    flex-direction: column;
  }
`;

const Contact = ({ contact }) => {
  const { img, title, name, tel, email, additionalTitle } = contact;

  return (
    <ContactContainer>
      <Image src={img} alt="" />
      <div>
        <JobTitle>
          {title}
          {additionalTitle && <span>{additionalTitle}</span>}
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
      </div>
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

const contacts = [
  {
    name: "Анастасия Васильева",
    title: "Председатель профсоюза",
    additionalTitle: ", врач-офтальмолог",
    img: "./imgs/anastasia1.png",
    email: "help@alyansvrachey.org"
  },
  {
    name: "Анастасия Тарабрина",
    title: "Заместитель председателя",
    additionalTitle: " профсоюза",
    img: "./imgs/anastasia2.png",
    tel: "+7 (919) 464-11-56",
    email: "tarabrina@alyansvrachey.org"
  },
  {
    name: "Иван Коновалов",
    title: "Пресс-секретарь",
    additionalTitle: " профсоюза",
    img: "./imgs/ivan.png",
    tel: "+7 (929) 673-00-31",
    email: "press@alyansvrachey.org"
  },
  {
    name: "Ирина Кваско",
    title: "Руководитель пациентского проекта",
    img: "./imgs/irina.png",
    tel: "+7 (909) 342-54-53",
    email: "patients@alyansvrachey.org"
  }
];

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
