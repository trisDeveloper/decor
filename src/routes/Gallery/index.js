import React, { useState, useRef, useEffect } from 'react';
import Background from './../../assets/images/gallery/gallery30.jpg';
import living1 from './../../assets/images/gallery/living1.jpg';
import living2 from './../../assets/images/gallery/living2.jpg';
import living3 from './../../assets/images/gallery/living3.jpg';
import living4 from './../../assets/images/gallery/living4.jpg';
import living5 from './../../assets/images/gallery/living5.jpg';
import living6 from './../../assets/images/gallery/living6.jpg';
import living7 from './../../assets/images/gallery/living7.mp4';
import living8 from './../../assets/images/gallery/living8.jpg';
import living9 from './../../assets/images/gallery/living9.jpg';

import kitchen1 from './../../assets/images/gallery/kitchen1.jpg';
import kitchen2 from './../../assets/images/gallery/kitchen2.jpg';
import kitchen3 from './../../assets/images/gallery/kitchen3.jpg';
import kitchen4 from './../../assets/images/gallery/kitchen4.jpg';
import kitchen5 from './../../assets/images/gallery/kitchen5.jpg';
import kitchen6 from './../../assets/images/gallery/kitchen6.jpg';
import kitchen7 from './../../assets/images/gallery/kitchen7.jpg';
import kitchen8 from './../../assets/images/gallery/kitchen8.jpg';
import kitchen9 from './../../assets/images/gallery/kitchen9.jpg';

import bath1 from './../../assets/images/gallery/bath1.jpg';
import bath2 from './../../assets/images/gallery/bath2.jpg';
import bath3 from './../../assets/images/gallery/bath3.jpg';
import bath4 from './../../assets/images/gallery/bath4.jpg';
import bath5 from './../../assets/images/gallery/bath5.jpg';
import bath6 from './../../assets/images/gallery/bath6.jpg';

import bed1 from './../../assets/images/gallery/bed1.jpg';
import bed2 from './../../assets/images/gallery/bed2.jpg';
import bed3 from './../../assets/images/gallery/bed3.jpg';
import bed4 from './../../assets/images/gallery/bed4.jpg';
import bed5 from './../../assets/images/gallery/bed5.jpg';

import others1 from './../../assets/images/gallery/others1.jpg';
import others2 from './../../assets/images/gallery/others2.jpg';
import others3 from './../../assets/images/gallery/others3.jpg';
import others4 from './../../assets/images/gallery/others4.jpg';

import './index.scss';
function Gallery() {
  // header animation
  const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    );
  };
  const [letterClass] = useState('text-animate');
  const nameArray = [
    'The',
    ' ',
    'Work',
    ' ',
    'That',
    ' ',
    "We've",
    ' ',
    'done',
    '!',
  ];
  let idxnum = nameArray.length;
  return (
    <div className="gallery">
      <div className="header">
        <img src={Background} className="background" alt="wall and pictures" />
        <div className="container">
          <div className="content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={idxnum}
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="sections">
        <ul>
          <li className="box">
            <div className="num">01</div>
            <img src={living1} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">02</div>
            <img src={living2} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">03</div>
            <img src={living3} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">04</div>
            <img src={living4} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">05</div>
            <img src={living5} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">06</div>
            <img src={living6} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">07</div>
            <video src={living7} alt="decor work that we have done" autoPlay loop />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">08</div>
            <img src={living8} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">09</div>
            <img src={living9} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">10</div>
            <img src={kitchen1} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">11</div>
            <img src={kitchen2} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">12</div>
            <img src={kitchen3} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">13</div>
            <img src={kitchen4} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">14</div>
            <img src={kitchen5} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">15</div>
            <img src={kitchen6} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">16</div>
            <img src={kitchen7} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">17</div>
            <img src={kitchen8} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">18</div>
            <img src={kitchen9} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">19</div>
            <img src={bath1} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">20</div>
            <img src={bath2} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">21</div>
            <img src={bath3} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">22</div>
            <img src={bath4} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">23</div>
            <img src={bath5} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">24</div>
            <img src={bath6} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">25</div>
            <img src={bed1} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">26</div>
            <img src={bed2} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">27</div>
            <img src={bed3} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">28</div>
            <img src={bed4} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">29</div>
            <img src={bed5} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">30</div>
            <img src={others1} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">31</div>
            <img src={others2} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">32</div>
            <img src={others3} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
          <li className="box">
            <div className="num">33</div>
            <img src={others4} alt="decor work that we have done" />
            <h4>a sepecial decor</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, maiores.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
