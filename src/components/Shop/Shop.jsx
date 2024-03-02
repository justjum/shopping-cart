import { useState, useEffect } from "react"
import Item from '../Item/Item.jsx'
import './Shop.css'
import { useOutletContext } from "react-router-dom";
import Cart from '../Cart/Cart.jsx'

export default function Shop( ) {
    

    const { 
        totalItems: [totalItems, setTotalItems],  
        showCart: [showCart, setShowCart],
        cart: [cart, setCart],
        items: [items, setItems],
    } = useOutletContext();


    function updateCart(item, quantity, update=false) {
        let updated = false;
        if (update) {
            cart.map((product) => {
                if (product.item == item) {
                    product.quantity = quantity;
                    setCart([...cart]);
                    updated=true;
                }
            })
        } else {
            cart.map((product) => {
                if (product.item == item) {
                    console.log(product.item, item)
                    product.quantity = product.quantity+quantity;
                    setCart([...cart])
                    updated=true;
                } else if (updated) {
                    console.log('updated')
                } else {
                    setCart([...cart, {item: item, quantity: quantity, key: crypto.randomUUID()} ])
                }
        });
        }

    }

    function deleteItem(id) {
        let newCart = cart.filter((product) => product.item !== id);
        setCart(newCart);
    }

    useEffect(() => updateTotal())

    function updateTotal() {
        let total = 0;
        cart.map((product) => {
            total = product.quantity+total;
        })  
        setTotalItems(total);

    }

    return (
        <>
            <Cart 
                showCart={showCart} 
                cart={JSON.stringify(cart)} 
                items={JSON.stringify(items)} 
                updateCart={updateCart} 
                deleteItem={deleteItem}
            />
            <div className="items">  
                {items.map((item) => {
                    return (
                        <>
                            <Item 
                                key={'key'+item.id} 
                                id={item.id} 
                                title={item.title} 
                                description={item.description} 
                                image={item.image} 
                                price={item.price} 
                                updateCart={updateCart} 
                                />
                        </>
                    )
                })}
            </div>
        </>

    )
}

