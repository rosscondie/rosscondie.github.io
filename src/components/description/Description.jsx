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
          My first experience with programming happened when I was 14, at a time
          where Myspace was all the rage and allowed me to experiment with HTML
          and CSS to customise my profile. The world of coding intrigued me but
          it remained a fleeting fascination during my teenage years.
          <br />
          <br />
          At 19, I studied Sound Engineering and my interest in software
          development was reignited. I found customisable VST instruments for
          drum machines that sparked an interest into coding once again. I saw
          the potential of software in sound production and wanted to explore it
          further.
          <br />
          <br />
          My journey didn't stop there. I've continued to refine my skills and
          expand my knowledge. Most recently, I graduated from{' '}
          <a href={CCSYLLABUS}>CodeClan's</a> intensive 16-week Software
          Development Bootcamp. Equipping myself with a solid foundation in
          modern web technologies. I'm now on the lookout for a full-time role
          where I can leverage my coding skills to contribute towards a
          company's sucess.
          <br />
          <br />
        </h3>
        <h3>
          In my spare time to further my understanding of TypeScript and Next.js
          I am contributing to a project made by{' '}
          <a href="https://www.linkedin.com/in/peter-trizuliak/">
            Peter Trizuliak
          </a>{' '}
          called <a href="https://autonews.io/">Autonews.io</a>
          <div className="devicons">
            <i class="devicon-typescript-plain colored"></i>
            <i class="devicon-nextjs-original"></i>
          </div>
        </h3>
      </div>
    </section>
  );
};

export default Description;
