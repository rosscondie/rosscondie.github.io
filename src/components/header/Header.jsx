import React from 'react';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Ross Condie</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <div className="header__visual">
          <code>&lt;/&gt;</code>
        </div>
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
