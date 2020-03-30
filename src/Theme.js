import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFFFFF",
    black: "#000B42",
    red: "#FF384B",
    background2: "#F5F6FF",
    formBorder: "#DAE0FC",
    grey: "#A6ACCC"
  },
  fontSizes: {
    small: "13px",
    small1: "15px",
    small2: "16px",
    small3: "17px",
    medium: "24px",
    medium1: "28px",
    large: "42px",
    large1: "44px"
  },
  breakPoints: {
    mobile: "320px",
    tablet: "768px",
    smallDesktop: "992px",
    desktop: "1200px"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
