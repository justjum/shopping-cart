import { useState, useEffect } from "react"
import Item from '../Item/Item.jsx'
import './Shop.css'
import { useOutletContext } from "react-router-dom";
import Cart from '../Cart/Cart.jsx'

export default function Shop( ) {
    const [items, setItems] = useState([]);

    const { 
        totalItems: [totalItems, setTotalItems], 
        cart: [cart, setCart], 
    } = useOutletContext();


    function updateCart(item, quantity) {
        let updated = false;
        cart.map((product) => {
                if (product.item == item) {
                    console.log(product.item, item)
                    product.quantity = product.quantity+quantity;
                    setCart([...cart])
                    updated=true;
                } else if (updated) {
                    console.log('updated')
                } else {
                    setCart([...cart, {item: item, quantity: quantity} ])
                }
        });
    }

    useEffect(() => updateTotal())

    function updateTotal() {
        let total = 0;
        cart.map((product) => {
            total = product.quantity+total;
        })  
        setTotalItems(total);
        console.log(cart)

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
            <div className="items">  
                {items.map((item) => {
                    return (
                        <>
                            <Item id={item.id} title={item.title} description={item.description} image={item.image} price={item.price} updateCart={updateCart}/>
                        </>
                    )
                })}
            </div>
        </>

    )
}

