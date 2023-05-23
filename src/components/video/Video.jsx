import React from 'react';
import './Video.css';

export const Video = () => {
  return (
    <div className="video-container">
      <iframe
        width="370"
        height="200"
        src="https://www.youtube.com/embed/591Hzn0-AJU"
        title="YouTube video player"
        sandbox="allow-same-origin allow-scripts"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
