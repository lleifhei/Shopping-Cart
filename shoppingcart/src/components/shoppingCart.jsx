import React from 'react';


const ShoppingCart = ( {cartItems} ) => {
    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    return (
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            {cartItems.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                </li>
            ))}
        </ul>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
);
};

export default ShoppingCart;
