import React, { useState, useRef, useEffect } from 'react';
import Background from './../../assets/images/gallery/gallery30.jpg';
import './index.scss';
function Gallery() {
  // header animation
  const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    );
  };
  const [letterClass] = useState('text-animate');
  const nameArray = [
    'The',
    ' ',
    'Work',
    ' ',
    'That',
    ' ',
    "We've",
    ' ',
    'done',
    '!',
  ];
  let idxnum = nameArray.length;
  return (
    <div className="gallery">
      <div className="header">
        <img src={Background} className="background" alt="wall and pictures" />
        <div className="container">
          <div className="content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={idxnum}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
