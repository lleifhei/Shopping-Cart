import { useState } from 'react'
import './App.css'
import ItemsList from './components/itemsList'
import ShoppingCart from './components/shoppingCart'

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  return (
    <>
      <ItemsList items={items} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  )
}

export default App
