import React, { useState, useEffect, useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';

import useFetch from '../../hook/useFetch';
import useLocalStorag from '../../hook/useLocalStorag';

import { CurrentUserContexts } from '../../../store/contexts/currentUser';
import { Error } from '../error';

import '../css/authentication.css';

import Logo from '../../img/site-logo.svg';
import { STATUS } from '../error/status';

export const Login = ({ setAuth }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = '/signin';
  const [{ isLoading, response }, doFetch] = useFetch(apiUrl);
  const [, setToken] = useLocalStorag('token');
  const [, setUid] = useLocalStorag('uid');
  const [, dispatch] = useContext(CurrentUserContexts);

  const [isfullSubmit, setIsfullSubmit] = useState(false);
  const [error, setError] = useState(false);

  const hardleSubmit = (event) => {
    event.preventDefault();
    doFetch({
      method: 'post',
      data: { login, password },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.token);
    setUid(response.uid);
    setError(true);
    setIsfullSubmit(true);
    setAuth(true);
    dispatch({ type: 'SET_AUTHORIZED', payload: response.user });
  }, [response, setToken, dispatch, setAuth, setUid]);

  if (isfullSubmit && response.status === STATUS.OK) {
    return <Navigate to="/page" replace />;
  }

  return (
    <div className="authentication">
      <div className="logo">
        <img src={Logo} alt="/" />
      </div>
      <h1 className="signinup">Sign In</h1>
      <form onSubmit={hardleSubmit} action="#" className="authentication__form">
        {error && <Error status={response.status} />}
        <input
          className="input__first"
          type="text"
          placeholder="Email or nickname"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          className="input__last"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="send" disabled={isLoading}>
          login
        </button>
      </form>
      <div className="accounthaveorcreate">
        <NavLink to="/register">Don't have an account yet?</NavLink>
      </div>
    </div>
  );
};
