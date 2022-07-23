import React /* ,{ useState, useRef, useEffect }*/ from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="cover">
        <div className="container">
          <div className="info">
            <div className="about-web">
              <h2>DecorX</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                explicabo fuga maiores at delectus.
              </p>
              <div className="links">
                <Link to="/gallery">Gallery</Link>&nbsp;|&nbsp;
                <Link to="/about">About Us</Link>
              </div>
            </div>
            <div className="contact">
              <h2>Get In Touch</h2>
              <form
                action="https://formsubmit.co/f640b5a7e168ab2b4cd4b5c7ac5b4269"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="area"
                  name="message"
                  id="msg"
                  cols="20"
                  rows="2"
                  placeholder="Send a message..."
                  defaultValue="Hi!"
                ></textarea>
                <input className="submit" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com">
            <FontAwesomeIcon
              className="media ig"
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon
              className="media fb"
              icon={faFacebookF}
            ></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon
              className="media tw"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon
              className="media in"
              icon={faLinkedinIn}
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="rights">
          <p>
            Copyright &copy; 2022 All Rights Reserved by
            <a
              href="https://github.com/trisBouden"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;tris
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
