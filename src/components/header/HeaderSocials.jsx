import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/rosscondie"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/rosscondie" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
