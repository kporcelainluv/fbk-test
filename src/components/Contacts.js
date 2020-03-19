import React from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";

const Image = styled.img`
  height: 76px;
  width: 76px;
  margin-right: 16px;
`;

const JobTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightGrey};
  line-height: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 16px;
`;

const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 22px;
  margin: 0 0 12px;
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
`;

const Container = styled.div`
  margin: 33px 15px 10px 19px;
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  max-width: 200px;
  margin: 0 0 16px;
`;

const ContactsBlock = styled.div`
  padding: 16px;
  border: 3px solid ${props => props.theme.colors.red};
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  max-width: 255px;
  padding: 0;
  margin: 0 0 16px;
`;

const ActionBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  a {
    color: ${props => props.theme.colors.red};
    padding-left: 10px;
  }
`;

const Contact = ({ contact }) => {
  const { img, title, name, tel } = contact;

  return (
    <ContactContainer>
      <Image src={img} alt="" />
      <div>
        <JobTitle>{title}</JobTitle>
        <Name>{name}</Name>
        <a href="#">
          <span className="visually-hidden">Написать письмо</span>
          <Icon height="24" width="24" name="mail" />
        </a>
        {tel && (
          <a href="#">
            <span className="visually-hidden">Позвонить</span>
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
      <Socials />
    </ContactsBlock>
  );
};

const contacts = [
  {
    name: "Анастасия Васильева",
    title: "Председатель профсоюза",
    img: "./imgs/anastasia1.png"
  },
  {
    name: "Анастасия Тарабрина",
    title: "Заместитель председателя",
    img: "./imgs/anastasia2.png",
    tel: "+799999999999"
  },
  {
    name: "Иван Коновалов",
    title: "Пресс-секретарь",
    img: "./imgs/ivan.png",
    tel: "+799999999999"
  },
  {
    name: "Ирина Кваско",
    title: "Руководитель пациентского проекта",
    img: "./imgs/irina.png",
    tel: "+799999999999"
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
