import React from "react";

import { Theme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Reasons } from "./sections/Reasons";
import { Form } from "./sections/Form";
import { FAQ } from "./sections/FAQ";
import { Contacts } from "./sections/Contacts";
import { Regions } from "./sections/Regions";
import { Footer } from "./sections/Footer";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <main>
        <h1 className="visually-hidden">Альянс врачей</h1>
        <Hero />
        <Reasons />
        <Form />
        <FAQ />
        <Contacts />
        <Regions />
      </main>
      <Footer />
    </Theme>
  );
};
