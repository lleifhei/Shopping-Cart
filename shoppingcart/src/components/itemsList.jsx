import React from 'react';

const ItemsList = ({items, addToCart, removeFromCart}) => {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} 
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;