import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <section>
      <div className="container description__container">
        <h3>
          Driven Junior Developer committed to advancing my skills and taking on
          new challenges in the technical sector. With a diverse range of life
          and work experience, I bring a unique perspective to my development
          work that can help create innovative solutions that make a difference.
          <br />
          <br />
          This perspective drives me to consistently improve, while my
          persistent attention to detail ensures meticulousness in my approach.
          <br />
          <br />
          Recently graduated from the{' '}
          <a href="https://codeclan.com/courses/professional-software-development/">
            CodeClan
          </a>{' '}
          Professional Software Development course learning the most in-demand
          software and web development skills.
          <br />
          <br />
          My passion for technology drives me to create meaningful and impactful
          software solutions that can change lives around the world.
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
