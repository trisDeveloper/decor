import './index.scss';
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import Background from './../../assets/images/about01.jpg';
import teamimg from './../../assets/images/about05.jpg';
import video from './../../assets/images/about08.mp4';
import our2img from './../../assets/images/about11.jpg';
import member1 from './../../assets/images/about02.jpg';
import member2 from './../../assets/images/about03.jpg';
import member3 from './../../assets/images/about04.jpg';
import member4 from './../../assets/images/about06.jpg';
import member5 from './../../assets/images/about07.jpg';
import useScrollPosition from './../../components/useScrollPosition';
function About() {
  const our1 = useRef();
  const our2 = useRef();
  const our3 = useRef();
  const span = useScrollPosition(1);

  // section animation
  const [isActive, setIsActive] = useState(['', '', '']);
  useEffect(() => {
    let states = [false, false, false];
    let our1offset = window.scrollY + our1.current.getBoundingClientRect().top;
    let our2offset = window.scrollY + our2.current.getBoundingClientRect().top;
    let our3offset = window.scrollY + our3.current.getBoundingClientRect().top;
    window.onscroll = () => {
      let mainY = window.scrollY + window.innerHeight / 2;
      if (mainY >= our1offset && mainY <= our2offset) {
        states = [true, false, false];
        setIsActive(states);
      } else if (mainY >= our2offset && mainY <= our3offset) {
        states = [false, true, false];
        setIsActive(states);
      } else if (mainY >= our3offset) {
        states = [false, false, true];
        setIsActive(states);
      }
    };
  }, []);
  // parallax scrolling for images with differents speed
  const videoscroll = useScrollPosition(0);
  const imgscroll = useScrollPosition(-0.2);
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
  const nameArray = ['About', ' ', 'Us', '!'];
  let idxnum = nameArray.length;
  return (
    <div className="about">
      <div className="header">
        <img src={Background} className="background" alt="team work" />
        <div className="container">
          <div className="content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={idxnum}
              />
            </h1>
            <div
              className="teamdiv"
              style={{ top: imgscroll + window.innerHeight * 0.4 }}
            >
              <img src={teamimg} alt="Our team" className="team" />
            </div>
          </div>
        </div>
      </div>

      <div className="ourinfo" id="ourinfo">
        <div className="container">
          <div className="our1" id="our1" ref={our1}>
            <div className="content">
              <span style={{ right: span - 1000 }}>Passion</span>
              <h2 className={`${isActive[0] ? 'active' : ''}`}>Our</h2>
              <p className={`${isActive[0] ? 'active' : ''}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab,
                porro tenetur dolores numquam perspiciatis eaque nulla. Illum
                esse reiciendis, laboriosam cumque fugiat assumenda temporibus
                ullam harum quo nam.
              </p>
            </div>
            <div className="images">
              <video src={video} autoPlay={true} muted></video>
            </div>
          </div>
          <div className="our2" id="our2" ref={our2}>
            <div className="content">
              <span style={{ right: span - 1000 - window.innerHeight / 2 }}>
                Goals
              </span>
              <h2 className={`${isActive[1] ? 'active' : ''}`}>Our</h2>
              <p className={`${isActive[1] ? 'active' : ''}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab,
                porro tenetur dolores numquam perspiciatis eaque nulla. Illum
                esse reiciendis, laboriosam cumque fugiat assumenda temporibus
                ullam harum quo Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Adipisci qui eligendi, nemo aliquid nihil
                recusandae!
              </p>
            </div>
            <div className="images">
              <img
                src={our2img}
                style={{ top: videoscroll }}
                alt="tow women work goals"
              ></img>
            </div>
          </div>
          <div className="our3" id="our3" ref={our3}>
            <div className="content">
              <span style={{ right: span - 1700 - window.innerHeight }}>
                Team
              </span>
              <h2 className={`${isActive[2] ? 'active' : ''}`}>Our</h2>
              <div className={`members ${isActive[2] ? 'active' : ''}`}>
                <Swiper
                  freeMode={true}
                  grabCursor={true}
                  modules={[FreeMode, Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  width={200}
                  loop={true}
                  loopedSlides={2}
                  spaceBetween={30}
                  autoplay={{
                    delay: 3000,
                    reverseDirection: true,
                    pauseOnMouseEnter: true,
                  }}
                >
                  <SwiperSlide className="member">
                    <div className="blur">
                      <img src={member1} alt="woman work our web designer" />
                    </div>
                    <h4>lee kim</h4>
                    <div className="job">DecorX CEO</div>
                    <div className="desc">
                      A great, meticulous manager and she has a kind heart
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="member">
                    <div className="blur">
                      <img src={member2} alt="man work our plant designer" />
                    </div>
                    <h4>john smith</h4>
                    <div className="job">engineer</div>
                    <div className="desc">Best plant coordinator ever</div>
                  </SwiperSlide>
                  <SwiperSlide className="member">
                    <div className="blur">
                      <img src={member3} alt="man work our creator" />
                    </div>
                    <h4>alex stone</h4>
                    <div className="job">engineer</div>
                    <div className="desc">
                      He has new, out-of-the-ordinary ideas that catch the eye
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="member">
                    <div className="blur">
                      <img src={member4} alt="woman work our managment" />
                    </div>
                    <h4>carla smith</h4>
                    <div className="job">designer</div>
                    <div className="desc">
                      Her designs make your space your own paradise
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="member">
                    <div className="blur">
                      <img src={member5} alt="man work our boss" />
                    </div>
                    <h4>song kang</h4>
                    <div className="job">DecorX Founder</div>
                    <div className="desc">
                      Optimistic, inspiring, cares about everyone and loves
                      pizza
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
