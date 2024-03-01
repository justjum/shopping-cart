import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {
  const [items, setItems] = useState([]);

  const [totalItems, setTotalItems] = useState(0);

  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState([{item:0, quantity:0, key: crypto.randomUUID()}]);

  function handleShowCart() {
    setShowCart(!showCart)
    console.log(showCart)
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/",{
        mode: 'cors'
        } 
    )
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        setItems(json)
    })
}, [])

  return (
    <>
      <Header totalItems={totalItems} handleShowCart={handleShowCart}/>

      <Outlet totalItems={totalItems} context={{
                                          totalItems: [totalItems, setTotalItems],
                                          showCart: [showCart, setShowCart],
                                          cart: [cart, setCart],
                                          items: [items, setItems],
                                          }} />
    </>
  )
}

export default App
