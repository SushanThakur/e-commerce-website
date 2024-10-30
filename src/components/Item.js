import { useState } from 'react';
import ItemCard from "./ItemCard";

export default function Item({cart, updateQuantity}){

  // function handleClick(inputIndex){
  //   setCart(cart + inputIndex);
  //   // console.log("Cart count:", cart + inputIndex);
  // }

  function handleClick(id, index) {
    // console.log(id + ' ' + index);

    updateQuantity(id, index);

    // cart.idQuant[id-1] += index;
    
    console.log(cart.idQuant.reduce((acc, qty) => acc + qty, 0));
  }

  const ItemList1 = {
    id: 1,
    imgSrc: 'https://img.drz.lazcdn.com/static/np/p/d675d2b2f6f310c915ef18e409baa5c7.jpg_400x400q80.jpg',
    itemName: 'TWS Wireless Bluetooth Airbuds',
    price: 1999,
    averageRating: 4,
    ratingNumber: 30,
    handleClick,
  }
  
  const ItemList2 = {
    id: 2,
    imgSrc: 'https://img.drz.lazcdn.com/static/np/p/df4605aed5016f1fe45935223c612718.jpg_400x400q80.jpg',
    itemName: 'Salcko Sel Roti Maker / Machine Soli - Premium',
    price: 799,
    averageRating: 3,
    ratingNumber: 30,
    handleClick,
  }

  return(
    <div className="card-container">
      <ItemCard key={ItemList1.id} {...ItemList1} />
      <ItemCard key={ItemList1.id} {...ItemList2} />
    </div>
  )
}