import React from 'react';
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      {/* NEED TO ADD CV TO ANCHOR TAG WITH THE DOWNLOAD ATTRIBUTE   <href={CV} download> */}
      <a href="" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
