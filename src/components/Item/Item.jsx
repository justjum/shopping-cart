import './Item.css'
import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js'


export default function Item( { id, title, description, image, price, updateCart }  ) {
    const [input, setInput] = useState(0)

    function handleIncrease() {
        setInput(input+1)
    }

    function handleDecrease() {
        setInput(input-1)
    }

    return ( 
        <div className='item' key={id}>  
            <img src={image} alt={title+'picture'} className='shop-item'/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='counter'>
                <form action="" onSubmit={(e) => {e.preventDefault(); updateCart(id, input)}}>
                    <Icon path={mdiMinusCircleOutline} size={1} onClick={handleDecrease} />
                    <input className='item-counter' type="text" inputMode='numeric' placeholder={input} />
                    <input type="hidden" value={id}/>
                    <Icon path={mdiPlusCircleOutline} size={1} onClick={handleIncrease} />
                    <button >Add to Cart</button>
                </form>
            </div>
            
            <p>${price}</p>
        </div>
        
    )
}
