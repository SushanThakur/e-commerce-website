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
        <button className='button' onClick={() => props.handleClick(index)}>Add To Cart</button>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    </div>
  );
}
