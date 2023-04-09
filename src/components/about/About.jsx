import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaPeopleCarry } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiPaint } from 'react-icons/bi';
import { BsMegaphone } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaPeopleCarry className="about__icon" />
              <h5>Team Player</h5>
              <small>
                You can't grow without a team! It allows people with different
                strengths to work together.
              </small>
            </article>
            <article className="about__card">
              <HiOutlineLightBulb className="about__icon" />
              <h5>Innovative</h5>
              <small>
                Being enthusiastic to try new things and gain new skills drives
                for a creative approach to problem solving.
              </small>
            </article>
            <article className="about__card">
              <BiPaint className="about__icon" />
              <h5>Creative</h5>
              <small>
                Passionate about creating and designing something that is not
                only functional but beautiful.
              </small>
            </article>
            <article className="about__card">
              <BsMegaphone className="about__icon" />
              <h5>Excellent Communicator</h5>
              <small>
                Effective communication is essential for managing great
                relationships and working within a team.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
