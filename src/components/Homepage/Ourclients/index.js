import React from 'react';
import './index.scss';
import astrazeneca from './../../../assets/images/clientspng/astrazeneca.png';
import centralpeak from './../../../assets/images/clientspng/centralpeak.png';
import dixie from './../../../assets/images/clientspng/dixie.png';
import google from './../../../assets/images/clientspng/google.png';
import hyatt from './../../../assets/images/clientspng/hyatt.png';
import knibctap from './../../../assets/images/clientspng/knibctap.png';
import nestle from './../../../assets/images/clientspng/nestle.png';
import ricks from './../../../assets/images/clientspng/ricks.png';
import sika from './../../../assets/images/clientspng/sika.png';
import smuckers from './../../../assets/images/clientspng/smuckers.png';
import tim from './../../../assets/images/clientspng/tim.png';
import westfield from './../../../assets/images/clientspng/westfield.png';
import westinghouse from './../../../assets/images/clientspng/westinghouse.png';
import yokohama from './../../../assets/images/clientspng/yokohama.png';
import zevent from './../../../assets/images/clientspng/zevent.png';
import InfiniteCarousel from 'react-leaf-carousel';
function Index() {
  return (
    <div className="clients" id="clients">
      <div className="container">
        <h2 className="main-title">Our Clients</h2>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src={astrazeneca} />
          </div>
          <div>
            <img alt="" src={centralpeak} />
          </div>
          <div>
            <img alt="" src={dixie} />
          </div>
          <div>
            <img alt="" src={google} />
          </div>
          <div>
            <img alt="" src={hyatt} />
          </div>
          <div>
            <img alt="" src={knibctap} />
          </div>
          <div>
            <img alt="" src={nestle} />
          </div>
          <div>
            <img alt="" src={ricks} />
          </div>
          <div>
            <img alt="" src={sika} />
          </div>
          <div>
            <img alt="" src={smuckers} />
          </div>
          <div>
            <img alt="" src={tim} />
          </div>
          <div>
            <img alt="" src={westfield} />
          </div>
          <div>
            <img alt="" src={westinghouse} />
          </div>
          <div>
            <img alt="" src={yokohama} />
          </div>
          <div>
            <img alt="" src={zevent} />
          </div>
        </InfiniteCarousel>
      </div>
    </div>
  );
}

export default Index;
