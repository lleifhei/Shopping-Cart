import React, { useState } from 'react'
import './App.css'
import ItemsList from './components/itemsList'
import ShoppingCart from './components/shoppingCart'

const produceItems = [
  {
    id: 1,
    name: 'Apple',
    price: 1.99,
    quantity: 0
  },
  {
    id: 2,
    name: 'Banana',
    price: 0.99,
    quantity: 0
  },
  {
    id: 3,
    name: 'Orange',
    price: 2.99,
    quantity: 0
  },
  {
    id: 4,
    name: 'Grapes',
    price: 3.99,
    quantity: 0
  },
  {
    id: 5,
    name: 'Strawberry',
    price: 4.99,
    quantity: 0
  },
  {
    id: 6,
    name: 'Blueberry',
    price: 5.99,
    quantity: 0
  },
  {
    id: 7,
    name: 'Raspberry',
    price: 6.99,
    quantity: 0
  },
]
function App() {
  const [cart, setCart] = useState([])
  const addtoCart = (item) => {
    setCart([...cart, item])
  }
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id))
  }
  return (
    <>
      <div className="container">
        <ItemsList items={produceItems} addToCart={addtoCart} removeFromCart={removeFromCart} />
        <ShoppingCart cartItems={cart} />
      </div>
    </>
  )
}
export default App
