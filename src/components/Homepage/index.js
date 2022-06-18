import "./index.scss";
import React, { useState } from "react";
import videoback from "./../../assets/images/39.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

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
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["Wanna", " ", "Change", " ", "Your", " ", "DECORATION!"];
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
            <button className="more">
              Explore more
              <FontAwesomeIcon
                className="btn-arrow"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
