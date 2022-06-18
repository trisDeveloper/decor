import React from 'react';
import oldroom from './../../../assets/images/04.jpg';
import oldkitchen from './../../../assets/images/16.jpg';
import styleone from './../../../assets/images/35.jpg';
import styletwo from './../../../assets/images/36.jpg';
import './index.scss';
function Index() {
  return (
    <div className="steps" id="steps">
      <div className="container">
        <h2 className="main-title">How Do We Work!</h2>
        <div className="step-1">
          <div className="content">
            <h2>Look At Your Space</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img src={oldroom} />
            <img src={oldkitchen} />
          </div>
        </div>
        <div className="step-2">
          <div className="content">
            <h2>Look At Your Space</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
            <img src={oldroom} />
          </div>
        </div>
        <div className="step-3">
          <div className="content">
            <h2>Look At Your Space</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventores, placeat omnis odio quam eaque quia eligendi numquam
              excepturi assumenda cum officiis.
            </p>
          </div>
          <div className="images">
                        <img src={oldkitchen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
