import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFFFFF",
    main: "#000B42",
    red: "#FF384B",
    background2: "#F5F6FF",
    active: "#DAE0FC",
    lightGrey: "#A6ACCC"
  },
  fontSizes: {
    small: "15px",
    nav: "16px",
    heading: "28px",
    form: "13px",
    medium: "17px"
  }
};

// eslint-disable-next-line react/prop-types
export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
