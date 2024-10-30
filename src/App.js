import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Item from './components/Item';

export default function App() {

  function calculateTotal() {
    return cart.idQuant.reduce((acc, qty) => acc + qty, 0);
  }

  const [cart, setCart] = useState({
    ids: [1,2,3],
    idQuant: [0,0,0],
    calculateTotal,
  });


  function updateQuantity(id, quantity){
    setCart(prevCart => {
      const updatedQuantities = [...prevCart.idQuant];
      const itemIndex = prevCart.ids.indexOf(id);
      if (itemIndex > -1) {
        updatedQuantities[itemIndex] = quantity;
      }
      console.log(calculateTotal());
      return { ...prevCart, idQuant: updatedQuantities };
    });
  }

  return(
    <div>

      <Header cart={calculateTotal()} />

      <Routes>
        <Route path="/" element={
          <>
            <Item cart={cart} updateQuantity={updateQuantity} />
          </>
          } 
        />
        <Route path='/cart' element={
          <>
            <h1>Cart</h1>
          </>
          } 
        />
      </Routes>
    </div>
  )
}