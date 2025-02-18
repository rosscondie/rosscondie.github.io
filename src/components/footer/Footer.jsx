import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}

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
        {/* <li>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/rosscondie">
          <BsGithub />
        </a>
        <a href="https://linkedin.com/in/rosscondie">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com/rosscondie">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ross Condie</small>
      </div>
    </footer>
  );
};

export default Footer;
