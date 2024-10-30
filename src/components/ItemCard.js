import { useState } from 'react';

export default function ItemCard(props) {
  
  const [index, setIndex] = useState(1);

  function increaseCart() {
    setIndex(Math.min(index + 1, 9));
  }

  function decreaseCart() {
    setIndex(Math.max(index - 1, 1));
  }

  return (
    <div className="item-card scaleUp">
      <img src={props.imgSrc} alt={props.itemName} />
      
      <p>{props.itemName}</p>

      <div className="meta">
        <p className="price">
          Rs. {props.price}
        </p>

        <p className="averageRating">
          {Array.from({ length: props.averageRating }, (_, i) => (
            <Star key={i} />
          ))}
          {' (' + props.averageRating + ')'}
        </p>
      </div>

      <div className='add-to-cart'>
        <p className='cart-toggle'>
          <button onClick={decreaseCart}>-</button>
          {index}
          <button onClick={increaseCart}>+</button>
        </p>
        <button className='button' onClick={() => props.handleClick(props.id, index)}>Add To Cart</button>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div>
      ⭐
    </div>
  );
}
