import React from "react";
import styled from "styled-components";

import { breakpoint } from "../core/sc";

const Block = styled.section`
  background-color: ${props => props.theme.colors.background2};
  padding: 30px 0;
  @media (min-width: ${breakpoint.tablet}) {
    padding: 5% 5% 0;
  }
`;

export const Container = ({ children }) => {
  return <Block>{children}</Block>;
};
