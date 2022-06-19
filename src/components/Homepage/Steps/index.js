import React from 'react';
import oldroom from './../../../assets/images/04.jpg';
import oldkitchen from './../../../assets/images/16.jpg';
import styleone from './../../../assets/images/35.jpg';
import styletwo from './../../../assets/images/36.jpg';
import plant from './../../../assets/images/07.jpg';
import plantsofa from './../../../assets/images/08.jpg';
import plantwall from './../../../assets/images/09.jpg';
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
            <img src={oldroom} alt="empty room" />
            <img src={oldkitchen} alt="old kitchen" />
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
            <img src={styleone} alt="dark home style" />
            <img src={styletwo} alt="light home style" />
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
            <img src={plantsofa} alt="planet sofa" />
            <img src={plantwall} alt="planet sofa" />
            <img src={plant} alt="planet sofa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
