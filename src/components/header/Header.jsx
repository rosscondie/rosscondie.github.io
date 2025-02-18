import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="neofetch-window">
          <div className="neofetch-logo">
            {` ┌────────┐
 │  ^  ^  │
 │  (oo)  │
 │  \\__/  │
 └────────┘
           `}
          </div>
          <div className="neofetch-info">
            <div className="neofetch-info-line">
              <span className="neofetch-label">OS:</span>
              <span className="neofetch-value">Portfolio OS x86_64</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">Host:</span>
              <span className="neofetch-value">Portfolio Machine</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">Kernel:</span>
              <span className="neofetch-value">6.1.0-portfolio</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">Shell:</span>
              <span className="neofetch-value">portfolio-sh 5.1.16</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">DE:</span>
              <span className="neofetch-value">React 18.2.0</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">WM:</span>
              <span className="neofetch-value">Vite</span>
            </div>
            <div className="neofetch-info-line">
              <span className="neofetch-label">Terminal:</span>
              <span className="neofetch-value">portfolio-term</span>
            </div>
          </div>
        </div>
        <div className="terminal-window">
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
            <span className="output-text">
              <span className="go-fmt">fmt.Println</span>(
              <span className="go-string">
                "Hello World!, I'm Ross Condie 👋 and I'm a Software Developer"
              </span>
              )
            </span>
          </div>
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
