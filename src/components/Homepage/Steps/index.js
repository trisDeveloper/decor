import React, { useEffect, useState, useRef } from 'react';
import useScrollPosition from './../../useScrollPosition';
import oldroom from './../../../assets/images/04.jpg';
import oldkitchen from './../../../assets/images/16.jpg';
import styleone from './../../../assets/images/35.jpg';
import styletwo from './../../../assets/images/36.jpg';
import plant from './../../../assets/images/07.jpg';
import plantsofa from './../../../assets/images/08.jpg';
import plantwall from './../../../assets/images/09.jpg';
import './index.scss';
function Index() {
  const steps = useRef();
  const step1 = useRef();
  const step2 = useRef();
  const step3 = useRef();
  // animation on scroll for contents

  const [isActive, setIsActive] = useState(['', '', '']);
  // parallax scrolling for images with differents speed
  const img1 = useScrollPosition(-1);
  const img2 = useScrollPosition(-2);
  const img3 = useScrollPosition(-1.1);
  const img4 = useScrollPosition(-1.6);
  const img5 = useScrollPosition(-1);
  const img6 = useScrollPosition(-1.5);
  const img7 = useScrollPosition(-2.9);

  const span1 = useScrollPosition(1);
  const span2 = useScrollPosition(1);
  const span3 = useScrollPosition(1);
  useEffect(() => {
    let states = [false, false, false];
    let step1offset =
      window.scrollY + step1.current.getBoundingClientRect().top;
    let step2offset =
      window.scrollY + step2.current.getBoundingClientRect().top;
    let step3offset =
      window.scrollY + step3.current.getBoundingClientRect().top;
    window.onscroll = () => {
      let mainY = window.scrollY + (window.innerHeight / 2);
      if (mainY >= step1offset && mainY <= step2offset) {
        states = [true, false, false];
        setIsActive(states);
        
        steps.current.style.backgroundColor = '#feffde';
      } else if (
        mainY >= step2offset &&
        mainY <= step3offset
      ) {
        states = [false, true, false];
        setIsActive(states);
        
        steps.current.style.backgroundColor = '#d9f6ff';
      } else if (
        mainY >= step3offset &&
        mainY <= step3offset + window.innerHeight
      ) {
        states = [false, false, true];
        setIsActive(states);
        
        steps.current.style.backgroundColor = '#ffe9ed';
      }
    };
  }, []);
  return (
    <div className="steps" id="steps" ref={steps}>
      <div className="container">
        <h2 className="main-title">How Do We Work!</h2>
        <div className="step-1" id="step-1" ref={step1}>
          <div className='content'>
            <span style={{ left: span1 - 900}}>01</span>
            <h2 className={`${isActive[0] ? 'active' : ''}`}>Look At Your Space</h2>
            <p className={`${isActive[0] ? 'active' : ''}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img style={{ top: img1 + 800 }} src={oldroom} alt="empty room" />
            <img
              style={{ top: img2 + 2400 }}
              src={oldkitchen}
              alt="old kitchen"
            />
          </div>
        </div>
        <div className="step-2" id="step-2" ref={step2}>
          <div className='content'>
            <span style={{ left: span2 - 900 - window.innerHeight}}>02</span>
            <h2 className={`${isActive[1] ? 'active' : ''}`}>See What Style You Like</h2>
            <p className={`${isActive[1] ? 'active' : ''}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img
              style={{ top: img3 + 1700 }}
              src={styleone}
              alt="dark home style"
            />
            <img
              style={{ top: img4 + 3350 }}
              src={styletwo}
              alt="light home style"
            />
          </div>
        </div>
        <div className="step-3" id="step-3" ref={step3}>
          <div className='content'>
            <span style={{ left: span3 - 900 - (window.innerHeight * 2)}}>03</span>
            <h2 className={`${isActive[2] ? 'active' : ''}`}>Make The Best Collection</h2>
            <p className={`${isActive[2] ? 'active' : ''}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img
              style={{ top: img5 + 3100 }}
              src={plantsofa}
              alt="planet sofa"
            />
            <img
              style={{ top: img6 + 3300 }}
              src={plantwall}
              alt="planet wall"
            />
            <img style={{ top: img7 + 7400 }} src={plant} alt="planet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
