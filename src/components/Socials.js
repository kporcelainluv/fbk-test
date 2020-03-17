import React from "react";
import { Icon } from "./Icon";
import styled from "styled-components";

const SocialList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 12px 0 0;

  li {
    list-style-type: none;
    margin-right: 12px;
  }
`;

export const Socials = () => {
  return (
    <SocialList>
      <li>
        <Icon name="odnoklassniki" width="32" height="33" viewBox="0 0 32 33" />
      </li>
      <li>
        <Icon name="facebook" width="32" height="33" viewBox="0 0 32 33" />
      </li>
      <li>
        {" "}
        <Icon name="twitter" width="32" height="33" viewBox="0 0 32 33" />
      </li>
      <li>
        <Icon name="youtube" width="32" height="33" viewBox="0 0 32 33" />
      </li>
      <li>
        <Icon name="vk" width="32" height="33" viewBox="0 0 32 33" />
      </li>
    </SocialList>
  );
};