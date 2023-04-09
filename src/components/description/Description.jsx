import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <section>
      <div className="container description__container">
        <h3>
          Innovative, task-driven Junior Software Developer looking to pursue a
          successful new career in the technical sector. Currently enrolled on
          the{' '}
          <a href="https://codeclan.com/courses/professional-software-development/">
            CodeClan
          </a>{' '}
          Professional Software Development course continuing my learning of the
          most in-demand software and web development skills.
          <br />
          <br />
          The idea that something I create can impact someone across the world
          now, or in the future is what drives my passion for technology.
        </h3>

        <div className="container button__container">
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Description;
