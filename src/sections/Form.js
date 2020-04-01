import React from "react";
import styled from "styled-components";

import { breakpoint, fontFamily } from "../core/sc";

const fields = [
  {
    name: "ФИО",
    id: "name",
    type: "text",
    disabled: false,
    value: "Румянцев Е"
  },
  { name: "Фамилия", id: "surname", type: "text", disabled: false },
  { name: "Имя", id: "nameFull", type: "text", disabled: false },
  { name: "Отчество", id: "secondName", type: "text", disabled: false },
  {
    name: "У меня нет отчества",
    id: "secondNameAbsent",
    type: "checkbox",
    disabled: false
  },
  { name: "E-mail", id: "email", type: "email", disabled: false },
  { name: "Телефон", id: "tel", type: "tel", disabled: false, value: "+7" },
  {
    name: "Введите свой регион",
    id: "region",
    type: "text",
    disabled: false
  },
  { name: "Населённый пункт", id: "area", type: "text", disabled: true },
  {
    name: "Название учреждения",
    id: "organization",
    type: "text",
    disabled: true
  }
];

const Container = styled.section`
  background-color: ${props => props.theme.colors.background};
  margin-bottom: 35px;

  @media (min-width: ${breakpoint.tablet}) {
    max-width: 688px;
    margin: 0 auto 20px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 1120px;
    display: flex;
    margin-bottom: 40px;
  }
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding: 0 12px;
  max-width: 90%;
  margin: 0 auto 33px;
  @media (min-width: ${breakpoint.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    padding: 11px 28px 17px;
    margin: 0 auto 50px;
    max-width: 100%;
  }
  @media (min-width: ${breakpoint.desktop}) {
    width: 507px;
    margin: 0;
    max-width: 100%;
    height: 376px;
    padding: 25px 20px 30px 40px;
  }
`;

const Heading = styled.h2`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.bold};
  font-size: ${props => props.theme.fontSizes.medium1};
  line-height: 28px;
  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    flex-direction: row;
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    span:last-of-type {
      padding-left: 6px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    font-family: ${fontFamily.regular};
    flex-direction: column;
    span:last-of-type {
      padding-left: 0;
    }
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small1};
  line-height: 24px;
  max-width: 100%;
  margin-bottom: 0;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 98%;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  font-size: ${props => props.theme.fontSizes.small1};
  color: ${props => props.theme.colors.red};
  display: block;
  margin-bottom: 16px;
  @media (min-width: ${breakpoint.desktop}) {
    display: inline-block;
  }
`;

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 100%;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 540px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 7px 0 0 75px;
  }
`;

const fullInitials = "&:nth-child(n + 2):nth-child(-n + 5)";
const nameAndSecondName = "&:nth-child(3),&:nth-child(5)";

const Label = styled.label`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 30px;
  }
  ${fullInitials} {
    display: none;
  }
  @media (min-width: ${breakpoint.tablet}) {
    margin: 0 auto 40px;
    max-width: 506px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 539px;

    &:nth-child(1) {
      display: none;
    }

    ${fullInitials} {
      display: flex;
      max-width: 258px;

      div {
        &:before {
          flex: 1 0 0;
        }
        &:after {
          flex: 13 0 0;
        }
      }
    }

    ${nameAndSecondName} {
      margin-left: 20px;
    }

    margin: 0 0 40px 0;
    padding: 0;
  }
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 48px;
  color: ${props => props.theme.colors.formBorder};
  padding-left: 15px;
  border: none;
  border-right: 3px solid ${props => props.theme.colors.formBorder};
  border-bottom: 3px solid ${props => props.theme.colors.formBorder};
  border-left: 3px solid ${props => props.theme.colors.formBorder};
  &:focus {
    border-right: 3px solid ${props => props.theme.colors.black};
    border-bottom: 3px solid ${props => props.theme.colors.black};
    border-left: 3px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.background2};
  }

  @media (min-width: ${breakpoint.tablet}) {
    max-width: 506px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 539px;
  }
`;
const borderFocus = "input:focus + &";
const borderDisabled = "input:disabled + &";
const FieldBorder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.formBorder};

  &:before {
    display: block;
    content: "";
    flex: 1 0 0;
    height: 3px;
    border-top: 3px solid ${props => props.theme.colors.formBorder};
    border-color: inherit;
  }
  &:after {
    display: block;
    content: "";
    flex: 15 0 0;
    height: 1px;
    border-top: 3px solid ${props => props.theme.colors.formBorder};
    border-color: inherit;
  }
  ${borderFocus} {
    color: ${props => props.theme.colors.black};
  }
  ${borderDisabled} {
    span {
      color: ${props => props.theme.colors.grey};
    }
  }
  @media (min-width: ${breakpoint.tablet}) {
    max-width: 506px;
    &:after {
      flex: 28 0 0;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    max-width: 539px;
  }
`;
const Field = styled.span`
  font-family: ${fontFamily.bold};
  line-height: 18px;
  margin-top: -6px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0 2px;
`;

const PersonalData = styled.div`
  display: ${props => (props.form ? "none" : "flex")};
  justify-content: flex-start;
  position: relative;
  margin-bottom: 20px;

  label {
    font-size: ${props => props.theme.fontSizes.small1};
    line-height: 24px;
    color: ${props => props.theme.colors.grey};
    max-width: 78%;
    position: relative;
    margin-left: 19px;
  }

  input {
    opacity: 0;
  }
  label:before {
    content: "";
    position: absolute;
    top: 2px;
    left: -31px;
    height: 20px;
    width: 20px;
    background-image: url("icons/checkbox.svg");
  }
  input:focus + label:before,
  input:focus + label:after {
    outline-offset: -2px;
    outline: ${props => props.theme.colors.black} auto 3px;
  }

  input:checked + label {
    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: -31px;
      height: 20px;
      width: 20px;
      background-image: url("icons/checkbox-on.svg");
    }
  }
  @media (min-width: ${breakpoint.tablet}) {
    display: ${props => (props.form ? "none" : "flex")};
    margin-bottom: 0;
    label {
      max-width: 475px;
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    display: flex;
    margin-left: ${props => (props.form ? "22px" : "0")};
    margin-top: ${props => (props.form ? "10px" : "0")};
    label {
      max-width: 540px;
    }
  }
`;

const Button = styled.input`
  width: 205px;
  max-width: 100%;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${breakpoint.tablet}) {
    margin: 20px 0;
    width: 207px;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: 17px 0;
    width: 244px;
    font-size: ${props => props.theme.fontSizes.small3};
  }
`;

const PersonalWrap = styled.div`
  @media (min-width: ${breakpoint.tablet}) {
    margin: auto;
  }
  @media (min-width: ${breakpoint.desktop}) {
    margin: 0;
  }
`;

const SplitText = styled.br``;

const JoinCTA = () => {
  return (
    <Block>
      <Heading>
        <span>Вступайте</span> <span>в Альянс врачей</span>
      </Heading>
      <Paragraph>
        По закону мы можем принять вас в профсоюз, только если у нас есть
        отделение в вашем регионе. Если его нет, мы поможем его создать.
        <SplitText /> Если в профсоюз вступит более половины сотрудников
        учреждения, вы сможете менять условия коллективного договора, а также
        участвовать в распределении оплаты труда и премий.
      </Paragraph>
      <Link href="https://alyansvrachey.ru/">Как устроен профсоюз?</Link>
    </Block>
  );
};

const Checkbox = ({ children, form, name }) => {
  return (
    <PersonalData form={form}>
      <input type="checkbox" id={name} name={name} />
      <label htmlFor={name}>{children}</label>
    </PersonalData>
  );
};

const FormComponent = () => {
  return (
    <FormBlock action="">
      {fields.map(field => {
        if (field.id === "secondNameAbsent") {
          return (
            <Checkbox key={field.id} form="true" name="secondNameAbsent">
              У меня нет отчества
            </Checkbox>
          );
        }

        return (
          <Label htmlFor={field.id} key={field.id}>
            <Input
              type={field.type}
              id={field.id}
              name={field.id}
              defaultValue={field.value}
              disabled={field.disabled}
            />
            <FieldBorder>
              <Field>{field.name}</Field>
            </FieldBorder>
          </Label>
        );
      })}
      <PersonalWrap>
        <Checkbox name="personal-data">
          Я даю согласие МПРЗ «Альянс врачей» на обработку моих персональных
          данных в объёме и на условиях, определенных{" "}
          <Link href="https://alyansvrachey.ru/">офертой</Link>
        </Checkbox>
        <Button type="submit" value="Отправить контакты" />
      </PersonalWrap>
    </FormBlock>
  );
};

export const Form = () => {
  return (
    <Container>
      <JoinCTA />
      <FormComponent />
    </Container>
  );
};
