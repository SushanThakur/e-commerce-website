import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/global.css';
import App from './App';

function Root() {
  
  // const [cart, setCart] = useState(cartCol);

  return(
    <React.StrictMode>
      <BrowserRouter>
        {/* <App cart={cart} setCart={setCart} /> */}
        <App/>
      </BrowserRouter>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

