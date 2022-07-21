import React, { useEffect, useState } from 'react';
import './index.scss';
import astrazeneca from './../../../assets/images/clientspng/astrazeneca.png';
import centralpeak from './../../../assets/images/clientspng/centralpeak.png';
import dixie from './../../../assets/images/clientspng/dixie.png';
import knibctap from './../../../assets/images/clientspng/knibctap.png';
import ricks from './../../../assets/images/clientspng/ricks.png';
import sika from './../../../assets/images/clientspng/sika.png';
import smuckers from './../../../assets/images/clientspng/smuckers.png';
import tim from './../../../assets/images/clientspng/tim.png';
import westfield from './../../../assets/images/clientspng/westfield.png';
import westinghouse from './../../../assets/images/clientspng/westinghouse.png';
import yokohama from './../../../assets/images/clientspng/yokohama.png';
import zevent from './../../../assets/images/clientspng/zevent.png';
// import InfiniteCarousel from 'react-leaf-carousel';
function Index() {
  const [isActive, setIsActive] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  useEffect(() => {
    let id = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    const interval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 12);
      id[randomNumber] = true;
      setIsActive(id);
    }, 2500);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="clients" id="clients">
      <div className="container">
        <h2 className="main-title">Our Clients</h2>
      </div>
      <div className="flex-box">
        <div className={`client ${isActive[0] ? 'active' : ''}`} id="1">
          <img alt="astrazeneca" src={astrazeneca} />
        </div>
        <div className={`client ${isActive[1] ? 'active' : ''}`} id="2">
          <img alt="centralpeak" src={centralpeak} />
        </div>
        <div className={`client ${isActive[2] ? 'active' : ''}`} id="3">
          <img alt="dixie" src={dixie} />
        </div>
        <div className={`client ${isActive[3] ? 'active' : ''}`} id="4">
          <img alt="knibctap" src={knibctap} />
        </div>
        <div className={`client ${isActive[4] ? 'active' : ''}`} id="5">
          <img alt="ricks" src={ricks} />
        </div>
        <div className={`client ${isActive[5] ? 'active' : ''}`} id="6">
          <img alt="sika" src={sika} />
        </div>
        <div className={`client ${isActive[6] ? 'active' : ''}`} id="7">
          <img alt="smuckers" src={smuckers} />
        </div>
        <div className={`client ${isActive[7] ? 'active' : ''}`} id="8">
          <img alt="tim" src={tim} />
        </div>
        <div className={`client ${isActive[8] ? 'active' : ''}`} id="9">
          <img alt="westfield" src={westfield} />
        </div>
        <div className={`client ${isActive[9] ? 'active' : ''}`} id="10">
          <img alt="westinghouse" src={westinghouse} />
        </div>
        <div className={`client ${isActive[10] ? 'active' : ''}`} id="11">
          <img alt="yokohama" src={yokohama} />
        </div>
        <div className={`client ${isActive[11] ? 'active' : ''}`} id="12">
          <img alt="zevent" src={zevent} />
        </div>
      </div>
    </div>
  );
}

export default Index;
