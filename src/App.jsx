import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Mywork from "./components/MyWork/Mywork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
