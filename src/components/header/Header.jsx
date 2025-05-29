import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="dev-symbol">&lt;/&gt;</div>
        <div className="terminal-window">
          <div className="terminal-prompt">
            <span className="prompt-user">user</span>
            <span className="prompt-separator">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-symbol">$&nbsp;</span>
            <span className="command typing-animation">go run hello.go</span>
          </div>
          <div className="terminal-output">
            <span className="output-text delayed-output">
              <span className="go-string">👋 Hello I'm Ross</span>
            </span>
          </div>
        </div>
        <span>Not a 10x developer. Just someone who reads error messages and Googles well.</span>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
