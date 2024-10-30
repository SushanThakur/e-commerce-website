import { useState } from 'react';

import Header from './components/Header';
import Item from './components/Item';
import { Route, Routes } from 'react-router-dom';

export default function App({cart, setCart}) {

  

  return(
    <div>
      
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={
          <>
            <Item cart={cart} setCart={setCart} />
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