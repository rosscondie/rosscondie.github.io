import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hobbies from './components/hobbies/Hobbies';
import Description from './components/description/Description';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Description />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Hobbies /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
