import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

import './css/global.css';
import Item from './components/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Item />
  </React.StrictMode>
);

