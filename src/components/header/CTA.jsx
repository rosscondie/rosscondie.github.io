import React from 'react';
import CV from '../../assets/ross_condie_software_engineer_cv.pdf';

const CTA = () => {
  const openCV = () => {
    window.open(CV, '_blank');
  };
  return (
    <div className="cta">
      <a
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        onClick={openCV}
      >
        Open CV
      </a>
      {/* NEED TO ADD CV TO ANCHOR TAG WITH THE DOWNLOAD ATTRIBUTE   <href={CV} download> */}
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
