import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
// import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="portfolio-tagline">
        building things. sometimes they work.{' '}
        <a href="https://github.com/ross" target="_blank" rel="noopener noreferrer">
          → github
        </a>
        {' · '}
        <a href="https://linkedin.com/in/ross" target="_blank" rel="noopener noreferrer">
          → linkedin
        </a>
      </div>
      <Nav />
      <Experience />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
