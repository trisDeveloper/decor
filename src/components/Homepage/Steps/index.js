import React, { useEffect } from 'react';
import oldroom from './../../../assets/images/04.jpg';
import oldkitchen from './../../../assets/images/16.jpg';
import styleone from './../../../assets/images/35.jpg';
import styletwo from './../../../assets/images/36.jpg';
import plant from './../../../assets/images/07.jpg';
import plantsofa from './../../../assets/images/08.jpg';
import plantwall from './../../../assets/images/09.jpg';
import './index.scss';
function Index() {
  let steps = document.getElementById('steps');
  let step1 = document.getElementById('step-1');
  let step2 = document.getElementById('step-2');
  let step3 = document.getElementById('step-3');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (steps) {
        let step1offset = window.scrollY + step1.getBoundingClientRect().top;
        let step2offset = window.scrollY + step2.getBoundingClientRect().top;
        let step3offset = window.scrollY + step3.getBoundingClientRect().top;
        if (window.scrollY >= step1offset && window.scrollY <= step2offset) {
          steps.style.backgroundColor = '#feffc39e';
          
          console.log('1');
        } else if (
          window.scrollY >= step2offset &&
          window.scrollY <= step3offset
        ) {
          steps.style.backgroundColor = '#c3f1ffa3';
          
          console.log('2');
        } else if (
          window.scrollY >= step3offset &&
          window.scrollY <= step3offset + step3.offsetHeight
        ) {
          steps.style.backgroundColor = '#ffdde3a3';
          
          console.log('3');
        }
      }
    });
  });

  return (
    <div className="steps" id="steps">
      <div className="container">
        <h2 className="main-title">How Do We Work!</h2>
        <div className="step-1" id="step-1">
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
        <div className="step-2" id="step-2">
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
        <div className="step-3" id="step-3">
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
