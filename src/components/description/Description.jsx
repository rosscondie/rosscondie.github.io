import React from "react";
import "./Description.css";
import CCSYLLABUS from "../../assets/code_clan_syllabus_psd.pdf";

const Description = () => {
    return (
        <section className="description__section">
        <div className="container description__container">
        <h3>
        Software Developer @{" "}
        <a href="https://www.vier.ai/">VIER GmbH</a>
        <br />
        </h3>
        <br />
        <h3>
        Currently diving deep into AI tools and their
        practical applications in software development.
        <br />
        <br />
        When I’m not coding, I’m chasing the perfect latte art tulip although let’s be honest, it usually looks more like a confused leaf.
        Also dabbling in digital and analog photography. 
        </h3>
        </div>
        </section>
    );
};

export default Description;
