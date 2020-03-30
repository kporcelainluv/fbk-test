import React from "react";

import { Theme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Reasons } from "./components/Reasons";
import { Form } from "./components/Form";
import { FAQ } from "./components/FAQ";
import { Contacts } from "./components/Contacts";
import { Regions } from "./components/Regions";
import { Footer } from "./components/Footer";

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
