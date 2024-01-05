import React from 'react';
import './Description.css';
import CCSYLLABUS from '../../assets/code_clan_syllabus_psd.pdf';

const Description = () => {
  return (
    <section className="description__section">
      <div className="container description__container">
        <h3>
          Hello 👋 I'm Ross and I love to build things with code !
          <br />
          <br />
          Currently working as a Backend Engineering Intern @{' '}
          <a href="https://www.rebuy.de/">rebuy recommerce GmbH.</a>
          <br />
          <br />
          <a href={CCSYLLABUS}>CodeClan</a> 2023 Software Development graduate.
          <br />
          <br />
        </h3>
        <h3>
          In my spare time I am learning Kotlin and Angular. I also love film
          photography and coffee !
        </h3>
      </div>
    </section>
  );
};

export default Description;
