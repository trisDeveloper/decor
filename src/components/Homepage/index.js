import './index.scss';
import React, { useState } from 'react';
import videoback from './../../assets/images/39.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Steps from './Steps';
import Ourclients from './Ourclients';

function Index() {
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
  const nameArray = ['Wanna', ' ', 'Change', ' ', 'Your', ' ', 'DECORATION!'];
  let idxnum = nameArray.length;

  return (
    <>
      <div className="header">
        <video src={videoback} autoPlay muted></video>
        <div className="container">
          <div className="content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={idxnum}
              />
            </h1>
            <div className="desc">
              I know that you are here for it. Lol no kidding, you wanna see if
              u can hire me or not.
            </div>
            <a href="#gallery" className="more">
              Explore more
              <FontAwesomeIcon
                className="btn-arrow"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <Steps />
      <Ourclients />
    </>
  );
}

export default Index;
