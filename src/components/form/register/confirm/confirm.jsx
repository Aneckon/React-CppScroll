import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import useFetch from '../../../hook/useFetch';

import { Error } from '../../error';
import { STATUS } from '../../error/status';

import './confirm.css';

import scrollRed from '../../../img/scrollWelcome-red.svg';
import scrollBlue from '../../../img/scrollWelcome-blue.svg';
import scrollRedArrow from '../../../img/scrollWelcome-redArrow.svg';
import scrollBlueArrow from '../../../img/scrollWelcome-blueArrow.svg';
import shade from '../../../img/shade.svg';

export const Confirm = () => {
  const { token } = useParams();
  const apiUrl = '/user/confirm';
  const [{ response }, doFetch] = useFetch(apiUrl);

  const [isScrollClicked, setIsScrollClicked] = useState(false);
  const [isReadytoRedirect, setIsReadytoRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsScrollClicked(true);
    setIsReadytoRedirect(true);
  };

  let animations = useSpring({
    loop: { reverse: true },
    config: { duration: 1050 },
    from: { y: 0, opacity: 1 },
    to: { y: 10, opacity: 0 },
    reset: true,
  });

  let animationsArrow = useSpring({
    loop: { reverse: true },
    config: { duration: 1050 },
    to: { y: 0 },
    from: { y: 10 },
    reset: true,
  });

  useEffect(() => {
    doFetch({
      method: 'post',
      data: { token: token },
    });
  }, []);

  if (isReadytoRedirect) {
    return <Navigate replace to="/" />;
  }

  if (!response) {
    return null;
  }

  if (response.status !== STATUS.OK) {
    return <h1>{<Error status={response.status} />}</h1>;
  }

  return (
    <div className={response.side === 0 ? 'confirm__red' : 'confirm__blue'}>
      <div className="confirm__scroll">
        <animated.img
          className="confirm__imgArrow"
          src={response.side === 0 ? scrollRedArrow : scrollBlueArrow}
          alt=""
          style={!isScrollClicked ? { ...animationsArrow } : {}}
        />
        <animated.img
          onClick={handleSubmit}
          src={response.side === 0 ? scrollRed : scrollBlue}
          alt=""
          style={!isScrollClicked ? { ...animations } : {}}
        />
        <img className="confirm__shade" src={shade} alt="" />
      </div>
      <div className={response.side === 0 ? 'confirm__title-red' : 'confirm__title-blue'}>
        <h1>{response.side === 0 ? 'Welcome to the dark side' : 'Welcome to the bright side'}</h1>
      </div>
    </div>
  );
};
