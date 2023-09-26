import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import { BrowserRouter } from 'react-router-dom';
import { ProfileProvider } from './components/profileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </BrowserRouter>
);
