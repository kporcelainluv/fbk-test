import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 16px;
`;
const Block = styled.div`
  border: 3px solid ${props => props.theme.colors.red};
  padding-top: 6px;
  padding-left: 13px;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    border: 4px solid ${props => props.theme.colors.red};
    margin-top: 19px;
    margin-right: 65px;
    padding-top: 22px;
    padding-left: 27px;
  }
`;

const Heading = styled.h2`
  font-family: "CoFo Sans Bold";
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.heading};
  line-height: 28px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    flex-direction: row;
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 44px;
    margin-top: 15px;
  }
`;
const BreakingText = styled.span`
  display: inline-block;
`;

const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 24px;
  margin: 10px 0 5px;
  max-width: 255px;
`;

const Link = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
  margin-bottom: 19px;
  display: block;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Label = styled.label`
  margin-bottom: 40px;
  position: relative;
  &:nth-child(6) {
    margin-bottom: 30px;
  }
`;

const Prompt = styled.span`
  font-family: "CoFo Sans Bold";
  line-height: 18px;
  font-size: ${props => props.theme.fontSizes.form};
  color: ${props => props.theme.colors.main};
  letter-spacing: 0.02em;
  margin-top: -9px;
  margin-left: 0px;
  padding: 0 5px;
  text-align: center;
  ${props => !props.disable} {
    color: ${props => props.theme.colors.active};
  }
`;
const PromptBorder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    display: block;
    content: "";
    flex: 1 0 0;
    height: 3px;
    border-top: 3px solid ${props => props.theme.colors.active};
  }
  &:after {
    display: block;
    content: "";
    flex: 10 0 0;
    height: 1px;
    border-top: 3px solid ${props => props.theme.colors.active};
  }
  &:focus {
    &:before {
      border-top: 3px solid ${props => props.theme.colors.main};
    }
    &:after {
      border-top: 3px solid ${props => props.theme.colors.main};
    }
  }
`;

const Input = styled.input`
  outline: none;
  width: 289px;
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
`;

const PersonalData = styled.label`
  display: flex;
  justify-content: space-between;

  span {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 24px;
    color: ${props => props.theme.colors.lightGrey};
    max-width: 256px;
  }

  input {
    opacity: 0;
    position: relative;
  }
  input:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-image: url("icons/checkbox-off.svg");
  }
`;

const Button = styled.input`
  width: 210px;
  padding-left: 10px;
  height: 60px;
  margin: 15px 0 15px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.red};
  border: none;
  @media (min-width: ${props => props.theme.breakPoints.tablet}) {
    margin: 24px auto;
    width: 249px;
  }
`;

export const JoinAlliance = () => {
  return (
    <Container>
      <Block>
        <Heading>
          Вступайте <BreakingText>в Альянс врачей</BreakingText>
        </Heading>
        <Paragraph>
          По закону мы можем принять вас{" "}
          <BreakingText>
            в профсоюз, только если у нас есть отделение в вашем регионе. Если
            его нет, мы поможем его создать.
          </BreakingText>
          <BreakingText>
            {" "}
            Если в профсоюз вступит более половины сотрудников учреждения, вы
            сможете менять условия коллективного договора, а также участвовать в
            распределении оплаты труда и премий.
          </BreakingText>
        </Paragraph>
        <Link href="">Как устроен профсоюз?</Link>
      </Block>

      <Form action="">
        <Label htmlFor="name">
          <PromptBorder>
            <Prompt>ФИО</Prompt>
          </PromptBorder>

          <Input type="text" id="name" />
        </Label>
        <Label htmlFor="email">
          <PromptBorder>
            <Prompt>E-mail</Prompt>
          </PromptBorder>
          <Input type="email" id="email" />
        </Label>
        <Label htmlFor="tel">
          <PromptBorder>
            <Prompt>Телефон</Prompt>
          </PromptBorder>

          <Input type="tel" id="tel" value="+7" />
        </Label>
        <Label htmlFor="region">
          <PromptBorder>
            <Prompt>Введите свой регион</Prompt>
          </PromptBorder>

          <Input type="text" id="region" />
        </Label>
        <Label htmlFor="area">
          <PromptBorder>
            <Prompt disable={true}>Населённый пункт </Prompt>
          </PromptBorder>

          <Input type="text" id="area" disabled={true} />
        </Label>
        <Label htmlFor="organization">
          <PromptBorder>
            <Prompt disable={true}>Название учреждения</Prompt>
          </PromptBorder>
          <Input type="text" id="organization" disabled={true} />
        </Label>
        <PersonalData htmlFor="personal-data">
          <input type="checkbox" id="personal-data" />
          <span>
            Я даю согласие МПРЗ «Альянс врачей» на обработку моих персональных
            данных в объёме{" "}
            <BreakingText>
              {" "}
              и на условиях, определенных <Link href="">офертой</Link>
            </BreakingText>
          </span>
        </PersonalData>
        <Button type="submit" value="Отправить контакты " />
      </Form>
    </Container>
  );
};
