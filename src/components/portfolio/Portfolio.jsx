import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import { Video } from '../video/Video';

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Digital Business Card',
    summary:
      'Digital Business Card built with React using Vite as a devlopment server and deployed it using Netlify.',
    github: 'https://github.com/rosscondie/d_b_card',
    demo: 'https://rcondie.netlify.app/',
  },
  {
    id: 2,
    isVideo: true,
    title: 'Uber Clone',
    summary:
      'Uber Clone mobile app. Paired project built with JavaScript, React Native, Redux, React Navigation, React Maps & Tailwind CSS',
    github: 'https://github.com/rosscondie/UberClone_Capstone',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio',
    summary:
      'This website! I built this using JavaScript, React and CSS. I learned about responsive design using media queries and how to deploy my application with Github pages.',
    github: 'https://github.com/rosscondie/rosscondie.github.io',
    demo: '',
  },
  {
    id: 4,
    image: IMG2,
    title: 'Atlas Wealth',
    summary:
      'Stocks and shares portfolio tracker app. Group project built with Javascript, React JS, Express, MongoDB & MaterialUI',
    github: 'https://github.com/rosscondie/Atlas_Wealth_Group_Project',
    demo: '',
  },
  {
    id: 5,
    image: IMG1,
    title: 'Fugitive Travel',
    summary:
      'Bucket list app to track travel adventures. Solo project built with Python, HTML, CSS, Flask & PostrgreSQL',
    github: 'https://github.com/rosscondie/Python_Flask_Project',
    demo: '',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, summary, isVideo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {isVideo ? <Video /> : <img src={image} alt={title} />}
                <h3>{title}</h3>
                <h4>{summary}</h4>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {/* if demo link exists then show live demo button */}
                  {demo ? (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
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
