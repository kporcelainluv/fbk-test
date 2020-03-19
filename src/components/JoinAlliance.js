import React from "react";
import styled from "styled-components";

const fields = [
  { name: "ФИО", id: "name", type: "text", disabled: false },
  { name: "E-mail", id: "email", type: "email", disabled: false },
  { name: "Телефон", id: "tel", type: "tel", disabled: false },
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

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  margin: 30px 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 30px 40px;
  }
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  margin-bottom: 20px;
  padding: 0 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    padding: 30px;
    margin-bottom: 30px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    font-family: "CoFo Sans";
  }
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  max-width: 255px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    max-width: 624px;
  }
`;

const Link = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
  display: block;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 0 auto 16px;
    width: 506px;
  }
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 48px;
  color: ${props => props.theme.colors.active};
  padding-left: 15px;
  border: none;
  border-right: 3px solid ${props => props.theme.colors.active};
  border-bottom: 3px solid ${props => props.theme.colors.active};
  border-left: 3px solid ${props => props.theme.colors.active};
  &:focus {
    border-right: 3px solid ${props => props.theme.colors.main};
    border-bottom: 3px solid ${props => props.theme.colors.main};
    border-left: 3px solid ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.main};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.background2};
  }

  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 506px;
  }
`;

const FieldBorder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => props.theme.colors.active};

  &:before {
    display: block;
    content: "";
    flex: 1 0 0;
    height: 3px;
    border-top: 3px solid ${props => props.theme.colors.active};
    border-color: inherit;
  }
  &:after {
    display: block;
    content: "";
    flex: 10 0 0;
    height: 1px;
    border-top: 3px solid ${props => props.theme.colors.active};
    border-color: inherit;
  }
  input:focus + & {
    color: ${props => props.theme.colors.main};
  }
  input:disabled + & {
    span {
      color: ${props => props.theme.colors.lightGrey};
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    width: 506px;
  }
`;
const Field = styled.span`
  font-family: "CoFo Sans Bold";
  line-height: 18px;
  margin-top: -6px;
  font-size: ${props => props.theme.fontSizes.form};
  color: ${props => props.theme.colors.main};
  letter-spacing: 0.02em;
  text-align: center;
`;

const PersonalData = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;

  label {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 24px;
    color: ${props => props.theme.colors.lightGrey};
    max-width: 227px;
    position: relative;
    margin-left: 30px;
  }

  input {
    opacity: 0;
  }
  label:before {
    content: "";
    position: absolute;
    top: 5px;
    left: -40px;
    height: 20px;
    width: 20px;
    background-image: url("icons/checkbox.svg");
  }
  input:focus + label:before,
  input:focus + label:after {
    outline-offset: -2px;
    outline: #4d90fe auto 3px;
  }

  input:checked + label {
    &:after {
      content: "";
      position: absolute;
      top: 5px;
      left: -40px;
      height: 20px;
      width: 20px;
      background-image: url("icons/checkbox-on.svg");
    }
  }
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    label {
      max-width: 475px;
    }
  }
`;

const Button = styled.input`
  width: 210px;
  height: 60px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 24px 0;
    width: 249px;
  }
`;

const PersonalWrap = styled.div`
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin-left: 90px;
  }
`;

const JoinCTA = () => {
  return (
    <Block>
      <Heading>Вступайте в Альянс врачей</Heading>
      <Paragraph>
        По закону мы можем принять вас в профсоюз, только если у нас есть
        отделение в вашем регионе. Если его нет, мы поможем его создать. Если в
        профсоюз вступит более половины сотрудников учреждения, вы сможете
        менять условия коллективного договора, а также участвовать в
        распределении оплаты труда и премий.
      </Paragraph>
      <Link href="">Как устроен профсоюз?</Link>
    </Block>
  );
};

const FormBlock = () => {
  return (
    <Form action="">
      {fields.map(field => {
        return (
          <Label htmlFor={field.id} key={field.id}>
            <Input
              type={field.type}
              id={field.id}
              name={field.id}
              disabled={field.disabled}
            />
            <FieldBorder>
              <Field>{field.name}</Field>
            </FieldBorder>
          </Label>
        );
      })}
      <PersonalWrap>
        <PersonalData>
          <input type="checkbox" id="personal-data" name="personal-data" />
          <label htmlFor="personal-data">
            Я даю согласие МПРЗ «Альянс врачей» на обработку моих персональных
            данных в объёме и на условиях, определенных{" "}
            <Link href="">офертой</Link>
          </label>
        </PersonalData>
        <Button type="submit" value="Отправить контакты" />
      </PersonalWrap>
    </Form>
  );
};

export const JoinAlliance = () => {
  return (
    <Container>
      <JoinCTA />
      <FormBlock />
    </Container>
  );
};
