import React from 'react';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';
// import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Ross Condie</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <div className="me">
          {/* img src should be src={ME} */}
          <img src={ME} alt="" />
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
