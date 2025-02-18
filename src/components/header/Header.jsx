import React from 'react';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="terminal-prompt">
          <span className="prompt-user">user</span>
          <span className="prompt-separator">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-colon">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span className="command"> go run hello.go</span>
        </div>
        <div className="terminal-output">
          <span className="output-text">fmt.Println("Hello, I'm Ross Condie")</span>
          <span className="output-result">Software Developer</span>
        </div>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
