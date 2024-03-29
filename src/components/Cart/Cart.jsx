import { useState } from 'react'
import './Cart.css'
import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiMinusCircleOutline, mdiDeleteCircleOutline } from '@mdi/js'

export default function Cart( { cart, showCart, items, updateCart, deleteItem, handleShowCart } ) {
    const cartArray = JSON.parse(cart);
    const itemsArray = JSON.parse(items);
    console.log(cartArray)
    console.log(itemsArray)
    let totalPrice = 0;

    return (
        <div className="shopping-cart" style={{display: showCart ? 'flex' : 'none'}}>
            <h2>Shopping Cart</h2>
            {cartArray.map((product) => {
                if (product.item === 0) {
                    return;
                } else {
                    let itemInfo = itemsArray.filter((item) => product.item === item.id)
                    totalPrice=totalPrice+(itemInfo[0].price*product.quantity)
                    return (
                        <>                            
                            <CartItem 
                                id={itemInfo[0].id} 
                                title={itemInfo[0].title} 
                                price={itemInfo[0].price} 
                                img={itemInfo[0].image} 
                                quantity={product.quantity} 
                                updateCart={updateCart} 
                                deleteItem={deleteItem} />
                        </>
                    )
                }

            })}
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleShowCart}>Close</button>
        </div>
    )
}

function CartItem( { id, title, img, quantity, price, updateCart, deleteItem }) {
    const [input, setInput] = useState(quantity)

    function handleIncrease() {
        setInput(input+1)
    }

    function handleDecrease() {
        setInput(input-1)
    }


    return (
        <div className="cart-item">
            <img src={img} alt={title} />
            <p>{title}</p>
            <form className='counter' action="" onSubmit={(e) => {e.preventDefault(); updateCart(id, input, true)}}>
                <Icon path={mdiMinusCircleOutline} size={1} onClick={handleDecrease} className='icon' />
                <input className='item-counter' type="text" inputMode='numeric' placeholder={input} />
                <input type="hidden" value={id}/>
                <Icon path={mdiPlusCircleOutline} size={1} onClick={handleIncrease} className='icon'/>
                <button>Update Cart</button>
                <Icon path={mdiDeleteCircleOutline} size={1.2} className='icon' onClick={() => deleteItem(id)} />
            </form>
            <p>${quantity*price}</p>
        </div>
    )
}