import React from 'react';
import './Nav.css';
import { IoHome } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import { FaBriefcase } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href="#">
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
