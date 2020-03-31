import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { breakpoint } from "../core/sc";

const SocialList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

  li {
    list-style-type: none;
    margin-right: 12px;
    display: inline-flex;
    height: 32px;
    width: 32px;
    line-height: 0;
  }

  @media (min-width: ${breakpoint.tablet}) {
    li {
      margin-right: 16px;
    }
  }
`;

const socials = ["odnoklassniki", "facebook", "twitter", "youtube", "vk"];

export const Socials = () => {
  return (
    <SocialList>
      {socials.map(social => {
        return (
          <li key={social}>
            <a href="#">
              <Icon name={social} width="32" height="32" viewBox="0 0 32 32" />
              <span className="visually-hidden">{social}</span>
            </a>
          </li>
        );
      })}
    </SocialList>
  );
};
