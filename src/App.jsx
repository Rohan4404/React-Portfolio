import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Mywork from "./components/MyWork/Mywork";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Mywork />
    </div>
  );
}

export default App;
