import React from "react";
import "./Description.css";
import CCSYLLABUS from "../../assets/code_clan_syllabus_psd.pdf";

const Description = () => {
  return (
    <section className="description__section">
      <div className="container description__container">
        <h3>
          Junior Software Developer @{" "}
          <a href="https://www.vier.ai/">VIER GmbH</a>
          <br />
          Previously completed a Backend Engineering Internship @{" "}
          <a href="https://www.rebuy.de/">rebuy recommerce GmbH</a>
          <br />
        </h3>
        <br />
        <h3>
          Passionate about optimizing development processes and exploring
          emerging technologies. Currently diving deep into AI tools and their
          practical applications in software development.
          <br />
          <br />
          When I'm not coding you'll find me exploring both digital and analog
          photography, rolling on the mats or pursuing the perfect latte art
          tulip 🌷 of which my skills remain questionably artistic.
        </h3>
      </div>
    </section>
  );
};

export default Description;
