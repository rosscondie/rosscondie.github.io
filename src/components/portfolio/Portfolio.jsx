import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/atlas_wealth.screenshot.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fugitive Travel',
    github: 'https://github.com/rosscondie/Python_Flask_Project',
    demo: '',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Atlas Wealth',
    github: 'https://github.com/rosscondie/Atlas_Wealth_Group_Project',
    demo: '',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
