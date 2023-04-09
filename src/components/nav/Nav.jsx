import React from 'react';
import './Nav.css';
import { IoHome } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { FaBriefcase } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <ImBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
