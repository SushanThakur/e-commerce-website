import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/global.css';
import App from './App';

function Root() {

  const cartCol = {
    ids : [] ,
    idQuant: [],
  }

  function updateCart(id, quant) {
    cart.ids.push(id);
    cart.idQuant.push(quant);
  }
  
  const [cart, setCart] = useState(cartCol);

  return(
    <React.StrictMode>
      <BrowserRouter>
        <App cart={cart} setCart={setCart} />
      </BrowserRouter>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

