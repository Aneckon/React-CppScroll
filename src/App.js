import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Register, Confirm, Login, Choice, CheckMail, Header } from './components';

import useFetch from './components/hook/useFetch';
import { RequireAuth } from './components/RequireAuth';

import './index.css';

function App() {
  const [user, setUser] = useState({});
  const [side, setSide] = useState(null);
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));

  const apiUrl = '/signup';
  const [{ isLoading }, doFetch] = useFetch(apiUrl);

  const signup = (side) => {
    if (isLoading) {
      return;
    }
    doFetch({
      method: 'post',
      data: { ...user, side },
    });
    setSide(side);
  };

  return (
    <div className="CppScrolls">
      <Routes>
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/account_confirmation/:token" element={<Confirm side={side} />} />
        <Route path="/choice" element={<Choice signup={signup} side={side} />} />
        <Route path="/checkmail/:side" element={<CheckMail />} />
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route
          path="/page"
          element={
            <RequireAuth auth={auth}>
              <Header setSide={setSide} side={side} />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
