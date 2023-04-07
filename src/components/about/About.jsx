import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaRegFolderOpen } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <BsFillPeopleFill className="about__icon" />
              <h5>Clients</h5>
              <small>300+ World Wide</small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ab
            nemo nisi a adipisci? Illo blanditiis asperiores unde corporis
            dignissimos, magni quasi obcaecati provident explicabo consequuntur?
            Labore voluptatum minus cumque!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
