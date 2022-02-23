import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './store/contexts/currentUser';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
