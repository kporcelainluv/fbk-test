import React, { Fragment } from "react";
import styled from "styled-components";

import { Socials } from "./Socials";
import { Icon } from "./Icon";
import { breakpoint, fontFamily } from "../core/sc";

const contacts = [
  {
    name: "Анастасия Васильева",
    title: "Председатель профсоюза",
    additionalTitle: ", врач-офтальмолог",
    img: "./imgs/anastasia1.png",
    email: "help@alyansvrachey.org",
    fullTitle: "Председатель профсоюза, врач-офтальмолог"
  },
  {
    name: "Анастасия Тарабрина",
    title: "Заместитель председателя",
    additionalTitle: " профсоюза",
    img: "./imgs/anastasia2.png",
    tel: "+7 (919) 464-11-56",
    email: "tarabrina@alyansvrachey.org",
    fullTitle: "Заместитель \n председателя профсоюза"
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

const Container = styled.section`
  max-width: 90%;
  margin: 0 auto 28px;
  @media (min-width: ${breakpoint.tablet}) {
    margin: 30px auto 40px;
    max-width: 688px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    margin-bottom: 28px;
  }
`;
const Heading = styled.h2`
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.heading};
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

const Image = styled.img`
  height: 76px;
  width: 76px;
  margin-right: 16px;
  @media (min-width: ${breakpoint.tablet}) {
    height: 142px;
    width: 142px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    height: 100px;
    width: 100px;
  }
`;

const JobTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.lightGrey};
  line-height: 20px;

  span {
    display: none;
  }
  @media (min-width: ${breakpoint.tablet}) {
    span {
      display: inline-block;
      padding-left: 3px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: -160px 0 135px 0;
    display: flex;
    flex-direction: column;
    max-width: 187px;
    white-space: pre-line;

    span {
      display: inline-block;
      padding-left: 0;
    }
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
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 22px;
  margin: 0 0 6px;
  @media (min-width: ${breakpoint.tablet}) {
    margin: 4px 0 18px;
    font-family: ${fontFamily.regular};
    font-size: ${props => props.theme.fontSizes.subheading};
  }
  @media (min-width: ${breakpoint.desktop}) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ContactContainer = styled.li`
  display: flex;
  padding: 23px 0;

  &:not(:last-of-type) {
    border-bottom: 2px dashed ${props => props.theme.colors.lightGrey};
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
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    padding: 32px 0 30px;
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
    &:first-of-type{
      div{
        margin: 25px 0 0 10px;
      }
  
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
    div{
    margin: 0;
    }
    &:nth-of-type(2){
    margin-left: 10px;
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
  font-size: ${props => props.theme.fontSizes.small};
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
  const { img, title, name, tel, email, additionalTitle, fullTitle } = contact;
  const jobTitle = (title, additionalTitle, fullTitle) => {
    if (fullTitle && window.innerWidth >= 1200) {
      return fullTitle;
    } else if (additionalTitle) {
      return (
        <Fragment>
          {title}
          <span>{additionalTitle}</span>
        </Fragment>
      );
    }
    return title;
  };

  return (
    <ContactContainer>
      <Image src={img} alt="" />
      <AboutWrap>
        <JobTitle>{jobTitle(title, additionalTitle, fullTitle)}</JobTitle>
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
