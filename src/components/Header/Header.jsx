import { useState } from 'react'
import './Header.css'
import { Link, Outlet } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCartOutline } from '@mdi/js';

function Header( { totalItems, handleShowCart } ) {
  

  return (
    <>
      <div className="header">
        <div className='nav-bar'>
          <Link to="home">Home</Link>
          <Link to="shop">Products</Link>
        </div>
        <p>LOGO</p>
        <div onClick={handleShowCart} className='cart-icon'>
            <Icon path={mdiCartOutline} size={1} />
            <p>{totalItems}</p>
        </div>
          

      </div>
    </>
  )
}

export default Header;