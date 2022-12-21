import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
