import React, { useEffect, useRef } from 'react';
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
  useEffect(() => {
    /*let stepsoffset =
      window.scrollY + steps.current.getBoundingClientRect().top;*/
    let step1offset =
      window.scrollY + step1.current.getBoundingClientRect().top;
    let step2offset =
      window.scrollY + step2.current.getBoundingClientRect().top;
    let step3offset =
      window.scrollY + step3.current.getBoundingClientRect().top;
    window.onscroll = () => {
      // if (
      //   window.scrollY >= stepsoffset &&
      //   window.scrollY <= step3offset + window.innerHeight
      // ) {
      //   steps.current.style.position = 'fixed';
      //   steps.current.style.top = '0';
      //   steps.current.style.left = '0';
      //   steps.current.style.right = '0';
      // } else {
      //   steps.current.style.position = 'relative';
      // }
      if (window.scrollY >= step1offset && window.scrollY <= step2offset) {
        steps.current.style.backgroundColor = '#feffde';
        // step1.current.style.display = 'flex';
        // step2.current.style.display = 'none';
        // step3.current.style.display = 'none';
      } else if (
        window.scrollY >= step2offset &&
        window.scrollY <= step3offset
      ) {
        steps.current.style.backgroundColor = '#d9f6ff';
        // step1.current.style.display = 'none';
        // step2.current.style.display = 'flex';
        // step3.current.style.display = 'none';
      } else if (
        window.scrollY >= step3offset &&
        window.scrollY <= step3offset + window.innerHeight
      ) {
        steps.current.style.backgroundColor = '#ffe9ed';
        // step1.current.style.display = 'none';
        // step2.current.style.display = 'none';
        // step3.current.style.display = 'flex';
        // console.log(window.scrollY - step3offset);
        // steps.current.style.top = -(window.scrollY - step3offset) + 'px';
      }
    };
  }, []);
  return (
    <div className="steps" id="steps" ref={steps}>
      <div className="container">
        <h2 className="main-title">How Do We Work!</h2>
        <div className="step-1" id="step-1" ref={step1}>
          <div className="content">
            <h2>Look At Your Space</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img src={oldroom} alt="empty room" />
            <img src={oldkitchen} alt="old kitchen" />
          </div>
        </div>
        <div className="step-2" id="step-2" ref={step2}>
          <div className="content">
            <h2>See What Style You Like</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img src={styleone} alt="dark home style" />
            <img src={styletwo} alt="light home style" />
          </div>
        </div>
        <div className="step-3" id="step-3" ref={step3}>
          <div className="content">
            <h2>Make The Best Collection</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img src={plantsofa} alt="planet sofa" />
            <img src={plantwall} alt="planet wall" />
            <img src={plant} alt="planet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
