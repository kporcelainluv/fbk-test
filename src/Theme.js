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
    subheading: "24px",
    form: "13px",
    medium: "17px",
    large: "42px",
    large2: "44px"
  },
  visuallyHidden: {
    position: "absolute",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    border: "0"
  },
  breakPoints: {
    mobile: "320px",
    tablet: "768px",
    smallDesktop: "968px",
    desktop: "1200px"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
