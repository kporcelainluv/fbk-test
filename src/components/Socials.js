import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon";

const SocialList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
    margin-right: 12px;
    display: inline-flex;
  }
  //
  // @media (min-width: ${props => props.theme.breakPoints.tablet}) {
  //   margin-top: 25px;
  // }
`;

export const socials = [
  "odnoklassniki",
  "facebook",
  "twitter",
  "youtube",
  "vk"
];

export const Socials = () => {
  return (
    <SocialList>
      {socials.map(social => {
        return (
          <li key={social}>
            <Icon name={social} width="32" height="32" viewBox="0 0 32 32" />
            <span className="visually-hidden">{social}</span>
          </li>
        );
      })}
    </SocialList>
  );
};
