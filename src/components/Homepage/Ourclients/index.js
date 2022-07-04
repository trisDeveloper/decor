import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAmazon,
  faDev,
  faFlipboard,
  faSellsy,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './index.scss';

function Index() {
  return (
    <div className="clients" id="clients">
      <div className="container">
        <h2 className="main-title">Our Clients</h2>
        <div className="brands">
          <FontAwesomeIcon className="brand" icon={faAmazon} />
          <FontAwesomeIcon className="brand" icon={faDev} />
          <FontAwesomeIcon className="brand" icon={faFlipboard} />
          <FontAwesomeIcon className="brand" icon={faSellsy} />
        </div>
      </div>
    </div>
  );
}

export default Index;
