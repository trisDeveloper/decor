import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos !== 0) {
      document.getElementById("navbar").style.backgroundColor = "black";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  /* for a responsive navbar and toggeling the menu icon. u know   */

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  /* if (click) {
    document.getElementById("navbar").style.backgroundColor = "black";
  } else {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos !== 0) {
      document.getElementById("navbar").style.backgroundColor = "black";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }*/
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-first">D</div>
            <div className="logo-rest">
              <span>ecorx</span>
            </div>
          </Link>

          <div className="menu-icon" id="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon className="icon" icon={click ? faTimes : faBars} />
          </div>
          <ul
            className="links"
            id="links"
            style={click ? { bottom: 0 } : { bottom: 100 + "%" }}
          >
            <li className="nav-item">
              <Link to="/" className="link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="link" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="link" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="link" onClick={closeMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
