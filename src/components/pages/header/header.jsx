import React, { useEffect } from 'react';

import useFetch from '../../hook/useFetch';
import useLocalStorag from '../../hook/useLocalStorag';

import { Incognito } from './incognito';
import { Side } from './side';
import { Menu } from './menu';

import './header.css';

export const Header = ({ setSide, side }) => {
  const [uid] = useLocalStorag('uid');
  const apiUrlUser = `/user/${uid}`;
  const apiUrlRating = '/rating';
  const [{ response: ratingResponse }, doFetchRating] = useFetch(apiUrlRating);
  const [{ response: userResponse }, doFetchUser] = useFetch(apiUrlUser);

  useEffect(() => {
    if (!userResponse) {
      return;
    }
    setSide(Boolean(userResponse.user.side));
  }, [userResponse, setSide]);

  useEffect(() => {
    doFetchUser();
    doFetchRating();
  }, [doFetchUser, doFetchRating]);

  if (!userResponse) {
    return null;
  }
  if (!ratingResponse) {
    return null;
  }

  return (
    <header className={!side ? 'header__red' : 'header__blue'}>
      <div className="container">
        <Incognito side={side} userResponse={userResponse} setSide={setSide} />
        <Side ratingResponse={ratingResponse} />
        <Menu side={side} userResponse={userResponse} />
      </div>
    </header>
  );
};
