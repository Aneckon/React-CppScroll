import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';

import './checkmail.css';

import scrollRed from '../../../img/scroll-red.svg';
import scrollBlue from '../../../img/scroll-blue.svg';
import shade from '../../../img/shade.svg';

export const CheckMail = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/checkmail/0';
  const checkMailPage = isLogin ? 'checkMail__red' : 'checkMail__blue';
  const images = isLogin ? scrollRed : scrollBlue;
  const checkMailTitlePage = isLogin ? 'checkMail__title-red' : 'checkMail__title-blue';

  const animations = useSpring({
    loop: { reverse: true },
    config: { duration: 1050 },
    from: { y: 0 },
    to: { y: 10 },
  });

  return (
    <div className={checkMailPage}>
      <div className="checkMail__scroll">
        <animated.img style={{ ...animations }} src={images} alt="" />
        <img className="checkMail__shade" src={shade} alt="" />
      </div>
      <div className={checkMailTitlePage}>
        <h1>Check your email to confirm account!</h1>
      </div>
    </div>
  );
};
