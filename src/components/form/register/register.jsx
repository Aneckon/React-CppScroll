import React, { useState, useEffect, useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';

import useFetch from '../../hook/useFetch';

import { CurrentUserContexts } from '../../../store/contexts/currentUser';

import '../css/authentication.css';

import Logo from '../../img/site-logo.svg';

export const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const apiUrl = '/signup';
  const [{ isLoading, response }] = useFetch(apiUrl);
  const [, dispatch] = useContext(CurrentUserContexts);

  const [isfullSubmit, setIsfullSubmit] = useState(false);

  const hardleSubmit = (event) => {
    event.preventDefault();
    setIsfullSubmit(true);
    setUser({ nickname, password, email });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    dispatch({ type: 'SET_AUTHORIZED', payload: response.user });
  }, [response, dispatch]);

  if (isfullSubmit) {
    return <Navigate replace to="/choice" />;
  }

  return (
    <div className="authentication">
      <div className="logo">
        <img src={Logo} alt="/" />
      </div>
      <h1 className="signinup">Sign up</h1>
      <form onSubmit={hardleSubmit} action="#" className="authentication__form">
        <input
          className="input__first"
          type="text"
          placeholder="Username"
          pattern="{1,10}"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          pattern=".+@gmail\.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          pattern="{6,20}"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="input__last"
          type="password"
          placeholder="Repeat password"
          pattern="{6,20}"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
        <button className="send" disabled={isLoading}>
          Let’s go
        </button>
      </form>
      <div className="accounthaveorcreate">
        <NavLink to="/">Already have an account?</NavLink>
      </div>
    </div>
  );
};
