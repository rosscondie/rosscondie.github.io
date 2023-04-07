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
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <IoHome />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#experience">
        <ImBook />
      </a>
      <a href="#portfolio">
        <FaBriefcase />
      </a>
      <a href="#contact">
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
