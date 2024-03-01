import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {
  const [totalItems, setTotalItems] = useState(0);

  const [cart, setCart] = useState([{item:0, quantity:0}]);

  const [showCart, setShowCart] = useState(false);


  function handleShowCart() {
    setShowCart(!showCart)
    console.log(showCart)
  }

  return (
    <>
      <Header totalItems={totalItems} handleShowCart={handleShowCart}/>

      <Outlet totalItems={totalItems} context={{
                                          totalItems: [totalItems, setTotalItems],
                                          cart: [cart, setCart]}} />
      <Cart showCart={showCart} cart={JSON.stringify(cart)} />
    </>
  )
}

export default App
