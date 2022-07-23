import './index.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Social() {
  return (
    <>
      <div className="social-media">
        <a href="https://instagram.com">
          <FontAwesomeIcon
            className="media ig"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </a>
        <a href="https://facebook.com/people/Tris-Bouden/100075258132819/">
          <FontAwesomeIcon
            className="media fb"
            icon={faFacebookF}
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/Tris_bouden">
          <FontAwesomeIcon
            className="media tw"
            icon={faTwitter}
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/tris-bouden-017627226">
          <FontAwesomeIcon
            className="media in"
            icon={faLinkedinIn}
          ></FontAwesomeIcon>
        </a>
      </div>
    </>
  );
}

export default Social;
