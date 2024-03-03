import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import GreyOut from './components/GreyOut/GreyOut';

function App() {
  const [items, setItems] = useState([]);

  const [totalItems, setTotalItems] = useState(0);

  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState([{item:0, quantity:0, key: crypto.randomUUID()}]);

  const [greyOut, setGreyOut] = useState(false)

  function handleShowCart() {
    setShowCart(!showCart)
    toggleGray();
  }

  function toggleGray() {
    console.log('that')
    setGreyOut(!greyOut)
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
      <GreyOut greyOut={greyOut}/>
      <Header totalItems={totalItems} handleShowCart={handleShowCart}/>

      <Outlet  context={{
                                                  totalItems: [totalItems, setTotalItems],
                                                  showCart: [showCart, setShowCart],
                                                  cart: [cart, setCart],
                                                  items: [items, setItems],
                                                  toggleGray: toggleGray,
                                                  handleShowCart: handleShowCart,
                                                }} />
    </>
  )
}

export default App
