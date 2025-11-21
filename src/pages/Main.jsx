import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Account from "../components/Account";
import Service from "../components/Service";
import Team from "../components/Team";
import Feedback from "../components/Feedback";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Account />
      <Service />
      <Team />
      <Feedback />
      <Form />
    </main>
  );
}

export default Main;
