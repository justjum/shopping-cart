import './Item.css'
import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js'


export default function Item( { id, title, description, image, price, updateCart, handleFullItem, popOut=false }  ) {
    const [input, setInput] = useState(0)

    function handleIncrease() {
        setInput(input+1)
    }

    function handleDecrease() {
        setInput(input-1)
    }

    return ( 
        <div className={popOut ? 'item popout' : 'item'}>  
            <img src={image} alt={title+'picture'} className='shop-item' onClick={() => handleFullItem(id, title, description, image, price)}/>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <p style={{display: popOut ? 'inline' : 'none'}}>{description}</p>
            <form className='counter'action="" onSubmit={(e) => {e.preventDefault(); updateCart(id, input); popOut ? handleFullItem() : ''}}>
                <Icon path={mdiMinusCircleOutline} size={1} onClick={handleDecrease} />
                <input className='item-counter' type="text" inputMode='numeric' placeholder={input} />
                <input type="hidden" value={id}/>
                <Icon path={mdiPlusCircleOutline} size={1} onClick={handleIncrease} />
                <button >Add to Cart</button>
                
            </form>
            
            <button style={{display: popOut ? 'inline': 'none'}} onClick={() => handleFullItem()}>Close</button>
            
            
            
        </div>
        
    )
}

// 