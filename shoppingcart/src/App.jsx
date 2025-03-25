import { useState } from 'react'
import './App.css'
import ItemsList from './components/itemsList'
import ShoppingCart from './components/shoppingCart'

function App() {

  return (
    <>
      <ItemsList />
      <ShoppingCart />
    </>
  )
}
export default App
