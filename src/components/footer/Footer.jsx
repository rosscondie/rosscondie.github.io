import React from 'react';
import './Footer.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        RA CONDIE
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About </a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com">
          <BsGithub />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ross Condie. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
