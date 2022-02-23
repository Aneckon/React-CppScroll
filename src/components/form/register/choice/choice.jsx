import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Navigate } from 'react-router-dom';

import './choice.css';

import scrollRed from '../../../img/scroll-red.svg';
import scrollBlue from '../../../img/scroll-blue.svg';
import shade from '../../../img/shade.svg';

export const Choice = ({ signup, side }) => {
  const [isfullSubmit, setsIsfullSubmit] = useState(false);

  const animations = useSpring({
    loop: { reverse: true },
    config: { duration: 1050 },
    from: { y: 0 },
    to: { y: 10 },
  });

  const submitRedSide = () => {
    signup(0);
    setsIsfullSubmit(true);
  };
  const submitBlueSide = () => {
    signup(1);
    setsIsfullSubmit(true);
  };

  if (isfullSubmit) {
    return <Navigate replace to={`/checkmail/${side}`} />;
  }

  return (
    <div className="choice">
      <div className="choice__content">
        <div className="red-container">
          <div className="red-half-circle"></div>
        </div>
        <div className="text">Choose your side</div>
        <div className="blue-container">
          <div className="blue-half-circle"></div>
        </div>
      </div>
      <div onClick={submitRedSide} to="" className="red-side">
        <animated.img src={scrollRed} alt="" style={{ ...animations }} />
        <img src={shade} alt="" />
      </div>
      <div onClick={submitBlueSide} to="" className="blue-side">
        <animated.img src={scrollBlue} alt="" style={{ ...animations }} />
        <img src={shade} alt="" />
      </div>
    </div>
  );
};
